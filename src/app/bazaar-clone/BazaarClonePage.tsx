import React, { useState } from "react";
import {} from "@/components";

import "./BazaarClonePage.css";
import classNames from "classnames";
import {
	DndContext,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
	useDroppable,
	rectIntersection,
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Item {
	id: string;
	size: "small" | "medium" | "large";
	damage?: number;
	enchancement?: string;
	cooldownReduction?: number;
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

const NUM_SLOTS = 10;

function DraggableItem({ item }: { item: Item }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: item.id,
		});

	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
	};

	const itemClasses = classNames(
		"BazaarClonePage-item",
		`BazaarClonePage-item--${item.size}`
	);

	return (
		<div
			ref={setNodeRef}
			style={style}
			className={itemClasses}
			{...attributes}
			{...listeners}>
			{item.id}
		</div>
	);
}

function BoardSlot({
	slotIndex,
	item,
}: {
	slotIndex: number;
	item: Item | null;
}) {
	// useDroppable for the “slot-n” ID
	const { setNodeRef, isOver } = useDroppable({
		id: `slot-${slotIndex}`,
	});

	const slotStyle: React.CSSProperties = {
		width: "100px",
		height: "100px",
		border: "2px solid #222",
		backgroundColor: isOver ? "lightblue" : "#eee",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<div ref={setNodeRef} style={slotStyle}>
			{item ? <DraggableItem item={item} /> : "Empty"}
		</div>
	);
}

export default function BazaarClonePage() {
	const [board, setBoard] = useState<(Item | null)[]>(
		Array(NUM_SLOTS).fill(null)
	);
	const [unplacedItems, setUnplacedItems] = useState<Item[]>(initialItems);

	// Setup dnd-kit sensors
	const sensors = useSensors(useSensor(PointerSensor));

	function moveToUnplaced(item: Item) {
		// Remove it from board if present
		setBoard((prev) =>
			prev.map((boardItem) => (boardItem?.id === item.id ? null : boardItem))
		);

		// If it’s not already in unplaced, add it
		setUnplacedItems((prev) => {
			if (prev.find((x) => x.id === item.id)) {
				// Already unplaced
				return prev;
			}
			return [...prev, item];
		});
	}

	/**
	 * Helper: Place item into a given slot (only if empty).
	 * Also removes from unplaced or from any old slot.
	 */
	function placeItemInSlot(item: Item, slotIndex: number) {
		// First remove the item from unplaced (if it’s there)
		setUnplacedItems((prev) => prev.filter((i) => i.id !== item.id));

		// Then remove from any other slot
		setBoard((prev) => {
			const newBoard = [...prev];
			// Remove from old slot if needed
			const oldSlotIndex = prev.findIndex((i) => i?.id === item.id);
			if (oldSlotIndex >= 0) {
				newBoard[oldSlotIndex] = null;
			}
			// Place in new slot
			newBoard[slotIndex] = item;
			return newBoard;
		});
	}

	// Handle drag end for reorder only within the same board
	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (!over) return; // Dropped outside any droppable

		const draggedItemId = active.id; // e.g. "testItem3"
		const overId = over.id; // e.g. "slot-3" or "unplaced-zone"

		// 1) Find the actual Item object being dragged
		const allItems = [...unplacedItems, ...board.filter(Boolean)]; // everything not null
		const draggedItem = allItems.find((item) => item.id === draggedItemId);
		if (!draggedItem) return;

		// If we dropped on an unplaced zone (optional):
		if (overId === "unplaced-zone") {
			// Move item back to unplaced
			moveToUnplaced(draggedItem);
			return;
		}

		// 2) If we dropped on a board slot, e.g. "slot-3"
		if (overId.startsWith("slot-")) {
			const slotIndex = parseInt(overId.replace("slot-", ""), 10);
			// If that slot is empty, we can move the item there
			if (board[slotIndex] === null) {
				placeItemInSlot(draggedItem, slotIndex);
			} else {
				// If it’s already occupied, do nothing or handle differently
			}
		}
	};

	return (
		<div className="BazaarClonePage">
			<header className="BazaarClonePage-header">
				<h1 className="BazaarClonePage-headerHead">Bazaar Clone Page</h1>
			</header>
			<main className="BazaarClonePage-main">
				<DndContext
					sensors={sensors}
					collisionDetection={rectIntersection}
					onDragEnd={handleDragEnd}
					accessibility={{
						// Provide stable ARIA messages to avoid ephemeral IDs
						announcements: {
							onDragStart({ active }) {
								return `Picked up ${active.id}.`;
							},
							onDragOver({ active, over }) {
								if (over) {
									return `${active.id} is over ${over.id}.`;
								}
								return `${active.id} is not over a droppable.`;
							},
							onDragEnd({ active, over }) {
								if (over) {
									return `${active.id} was dropped on ${over.id}.`;
								}
								return `${active.id} was dropped, but not on a valid droppable.`;
							},
							onDragCancel({ active }) {
								return `Movement cancelled. ${active.id} was dropped.`;
							},
						},
					}}>
					{/* Unplaced Items Area: droppable as well (if you want to drop items “off” the board) */}
					<div
						id="unplaced-zone"
						style={{ border: "2px dashed #999", padding: "1rem" }}>
						<h2>Unplaced Items</h2>
						<div className="BazaarClonePage-unplacedItems">
							{unplacedItems.map((item) => (
								<DraggableItem key={item.id} item={item} />
							))}
						</div>
					</div>
					{/* The 1×10 Board */}
					<div className="BazaarClonePage-board">
						{board.map((slotItem, index) => (
							<BoardSlot key={index} slotIndex={index} item={slotItem} />
						))}
					</div>
				</DndContext>
			</main>
		</div>
	);
}
