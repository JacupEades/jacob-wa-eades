"use client";

import React, { DragEvent, useState } from "react";
import {} from "@/components";

import "./BazaarClonePage.css";
import classNames from "classnames";

interface Item {
	id: string;
	size: "small" | "medium" | "large";
}

const initialItems: Item[] = [
	{
		id: "crown-of-thorns",
		size: "small",
		damage: 10,
		enchancement: "bleeding",
		cooldownReduction: 0,
	},
	{ id: "testItem2", size: "medium" },
	{ id: "testItem3", size: "large" },
	{ id: "testItem4", size: "small" },
];

const TYPE_ENEMY: string = "enemy";
const TYPE_PLAYER: string = "player";

export default function BazaarClonePage() {
	const [enemyItems, setEnemyItems] = useState<Item[]>(initialItems);
	const [playerItems, setPlayerItems] = useState<Item[]>(initialItems);

	const handleDragStart = (e: DragEvent<HTMLDivElement>, index: number) => {
		e.dataTransfer.setData("itemIndex", index.toString());
	};

	const handleDrop = (
		e: DragEvent<HTMLDivElement>,
		dropIndex: number,
		boardType: string
	) => {
		const draggedIndex = parseInt(e.dataTransfer.getData("itemIndex"), 10);
		if (isNaN(draggedIndex)) return;

		if (boardType === TYPE_ENEMY) {
			const items = [...enemyItems];
			const [draggedItem] = items.splice(draggedIndex, 1); // Remove the dragged item
			items.splice(dropIndex, 0, draggedItem); // Insert at the drop position
			setEnemyItems(items);
		}
		if (boardType === TYPE_PLAYER) {
			const items = [...playerItems];
			const [draggedItem] = items.splice(draggedIndex, 1); // Remove the dragged item
			items.splice(dropIndex, 0, draggedItem); // Insert at the drop position
			setPlayerItems(items);
		}
	};

	return (
		<div className="BazaarClonePage">
			<header className="BazaarClonePage-header">
				<h1 className="BazaarClonePage-headerHead">Bazaar Clone Page</h1>
			</header>
			<main className="BazaarClonePage-main">
				{/* Enemy Board */}
				<section className="BazaarClonePage-enemySection">
					{enemyItems.map((item, index) => {
						const itemClasses = classNames(
							"BazaarClonePage-item",
							`BazaarClonePage-item--${item.size}`
						);

						return (
							<div
								key={item.id + index}
								className={itemClasses}
								draggable
								onDragStart={(e) => handleDragStart(e, index)}
								onDrop={(e) => handleDrop(e, index, TYPE_ENEMY)}
								onDragOver={(e) => e.preventDefault()}>
								{item.id}
							</div>
						);
					})}
				</section>
				{/* Player Board */}
				<section className="BazaarClonePage-playerSection">
					{playerItems.map((item, index) => {
						const itemClasses = classNames(
							"BazaarClonePage-item",
							`BazaarClonePage-item--${item.size}`
						);

						return (
							<div
								key={item.id + index}
								className={itemClasses}
								draggable
								onDragStart={(e) => handleDragStart(e, index)}
								onDrop={(e) => handleDrop(e, index, TYPE_PLAYER)}
								onDragOver={(e) => e.preventDefault()}>
								{item.id}
							</div>
						);
					})}
				</section>
			</main>
		</div>
	);
}

// TODO: @Jacob, Was stopped while working on this prompt
// "use client";

// import React, { DragEvent, useState } from "react";
// import {} from "@/components";

// import "./BazaarClonePage.css";
// import classNames from "classnames";

// interface Item {
// 	id: string;
// 	size: "small" | "medium" | "large";
// }

// const initialItems: Item[] = [
// 	{ id: "crown-of-thorns", size: "small", damage: 10, enchancement: 'bleeding', cooldownReduction: 0 },
// 	{ id: "testItem2", size: "medium" },
// 	{ id: "testItem3", size: "large" },
// 	{ id: "testItem4", size: "small" },
// ];

// const TYPE_ENEMY: string = "enemy";
// const TYPE_PLAYER: string = "player";

// export default function BazaarClonePage() {
// 	const [enemyItems, setEnemyItems] = useState<Item[]>(initialItems);
// 	const [playerItems, setPlayerItems] = useState<Item[]>(initialItems);

// 	const handleDragStart = (e: DragEvent<HTMLDivElement>, index: number) => {
// 		e.dataTransfer.setData("itemIndex", index.toString());
// 	};

// 	const handleDrop = (
// 		e: DragEvent<HTMLDivElement>,
// 		dropIndex: number,
// 		boardType: string
// 	) => {
// 		const draggedIndex = parseInt(e.dataTransfer.getData("itemIndex"), 10);
// 		if (isNaN(draggedIndex)) return;

// 		if (boardType === TYPE_ENEMY) {
// 			const items = [...enemyItems];
// 			const [draggedItem] = items.splice(draggedIndex, 1); // Remove the dragged item
// 			items.splice(dropIndex, 0, draggedItem); // Insert at the drop position
// 			setEnemyItems(items);
// 		}
// 		if (boardType === TYPE_PLAYER) {
// 			const items = [...playerItems];
// 			const [draggedItem] = items.splice(draggedIndex, 1); // Remove the dragged item
// 			items.splice(dropIndex, 0, draggedItem); // Insert at the drop position
// 			setPlayerItems(items);
// 		}
// 	};

// 	return (
// 		<div className="BazaarClonePage">
// 			<header className="BazaarClonePage-header">
// 				<h1 className="BazaarClonePage-headerHead">Bazaar Clone Page</h1>
// 			</header>
// 			<main className="BazaarClonePage-main">
// 				{/* Enemy Board */}
// 				<section className="BazaarClonePage-enemySection">
// 					{enemyItems.map((item, index) => {
// 						const itemClasses = classNames(
// 							"BazaarClonePage-item",
// 							`BazaarClonePage-item--${item.size}`
// 						);

// 						return (
// 							<div
// 								key={item.id + index}
// 								className={itemClasses}
// 								draggable
// 								onDragStart={(e) => handleDragStart(e, index)}
// 								onDrop={(e) => handleDrop(e, index, TYPE_ENEMY)}
// 								onDragOver={(e) => e.preventDefault()}>
// 								{item.id}
// 							</div>
// 						);
// 					})}
// 				</section>
// 				{/* Player Board */}
// 				<section className="BazaarClonePage-playerSection">
// 					{playerItems.map((item, index) => {
// 						const itemClasses = classNames(
// 							"BazaarClonePage-item",
// 							`BazaarClonePage-item--${item.size}`
// 						);

// 						return (
// 							<div
// 								key={item.id + index}
// 								className={itemClasses}
// 								draggable
// 								onDragStart={(e) => handleDragStart(e, index)}
// 								onDrop={(e) => handleDrop(e, index, TYPE_PLAYER)}
// 								onDragOver={(e) => e.preventDefault()}>
// 								{item.id}
// 							</div>
// 						);
// 					})}
// 				</section>
// 			</main>
// 		</div>
// 	);
// }

// Now that we can move these items around. I want to extend the functionality of the items. I need to somehow create a CrownOfThorns component that the
