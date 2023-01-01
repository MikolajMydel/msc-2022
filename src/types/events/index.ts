import { ChangeEvent, KeyboardEvent, DragEvent } from "react";

export type handleChangeType = (event: ChangeEvent<HTMLInputElement>) => void;
export type handleKeyDownType = (
	event: KeyboardEvent<HTMLInputElement>
) => void;
export type handleDropType = (event: DragEvent<HTMLDivElement>) => void;
export type handleDragType = (event: DragEvent<HTMLDivElement>) => void;
