export const DATA_THEMES = {
	LIGHT: "light",
	DARK: "dark",
} as const;

export const COLOR_VARIABLES = {
	LIGHT: {
		"--background-main": "#e6d5ff",
		"--background-secondary": "#f4e9ff",
		"--background-subtle": "#faf5ff",

		"--foreground-main": "#1e1433",
		"--foreground-secondary": "#3d275a",
		"--foreground-subtle": "#5a3d7c",

		"--accent-main": "#ffc131",
		"--accent-subtle": "#ffd575",
		"--accent-secondary": "#ffecc1",

		"--typo-main": "#faf5ff",
		"--typo-subtle": "#d9d4de",
		"--typo-secondary": "#918a97",
	},
	DARK: {
		"--background-main": "#1a102b",
		"--background-secondary": "#2a1b3d",
		"--background-subtle": "#3c2a57",

		"--foreground-main": "#f0eaff",
		"--foreground-secondary": "#d8bfff",
		"--foreground-subtle": "#b39cd0",

		"--accent-main": "#a084e8",
		"--accent-subtle": "#f4c430",
		"--accent-secondary": "#ff96a9",

		"--typo-main": "#faf5ff",
		"--typo-subtle": "#d9d4de",
		"--typo-secondary": "#918a97",
	},
} as const;
