/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";

/**
 * Converts token references from {color.blue.500} to var(--color-blue-500)
 */
function resolveTokenReference(value: string): string {
	const referenceMatch = value.match(/^{(.+)}$/);
	if (referenceMatch) {
		return `var(--${referenceMatch[1].replace(/\./g, "-")})`;
	}
	return value;
}

/**
 * Recursively convert a tokens object into CSS custom properties.
 */
function convertTokensToCSSVariables(
	tokens: Record<string, any>,
	prefix = ""
): string {
	let css = "";
	for (const key of Object.keys(tokens)) {
		const value = tokens[key];

		if (typeof value === "object" && value !== null) {
			// Recurse down one level
			const nestedPrefix = prefix ? `${prefix}-${key}` : key;
			css += convertTokensToCSSVariables(value, nestedPrefix);
		} else {
			if (key === "value") {
				// Remove '-value' suffix from final CSS var name
				const varName = prefix.replace(/-value$/, "");
				const resolvedValue = resolveTokenReference(value);

				css += `  --${varName}: ${resolvedValue};\n`;
			}
		}
	}
	return css;
}

/**
 * Merge 'source' into 'target' deeply.
 */
function mergeDeep(target: Record<string, any>, source: Record<string, any>) {
	for (const key in source) {
		if (
			typeof source[key] === "object" &&
			source[key] !== null &&
			!Array.isArray(source[key])
		) {
			if (!target[key]) {
				target[key] = {};
			}
			mergeDeep(target[key], source[key]);
		} else {
			target[key] = source[key];
		}
	}
	return target;
}

function buildTokens() {
	// The folder you want to read all .json tokens from:
	const tokensDir = path.join(process.cwd(), "src", "tokens");

	// Merge all token JSON into one object
	const mergedTokens: Record<string, any> = {};

	function walkTokensDir(dirPath: string) {
		const entries = fs.readdirSync(dirPath, { withFileTypes: true });
		for (const entry of entries) {
			const fullPath = path.join(dirPath, entry.name);
			if (entry.isDirectory()) {
				walkTokensDir(fullPath);
			} else if (entry.isFile() && entry.name.endsWith(".json")) {
				const fileContents = fs.readFileSync(fullPath, "utf-8");
				try {
					const parsed = JSON.parse(fileContents);
					mergeDeep(mergedTokens, parsed);
				} catch (err) {
					console.error(`Error parsing JSON in ${fullPath}:`, err);
				}
			}
		}
	}

	walkTokensDir(tokensDir);

	// Convert to CSS variables
	const cssVars = convertTokensToCSSVariables(mergedTokens);
	const finalCSS = `:root {\n${cssVars}}\n`;

	// Output to e.g. "public/tokens.css"
	const outputPath = path.join(process.cwd(), "public", "tokens.css");
	fs.writeFileSync(outputPath, finalCSS, "utf8");
	console.log(`✅ Tokens built and written to ${outputPath}`);
}

// If invoked directly (e.g. via "npm run build-tokens"):
buildTokens();
