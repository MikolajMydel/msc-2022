import { DragEvent, useState } from "react";
import FileUploadZone from "./FileUploadZone";

export type handleDropType = (event: DragEvent<HTMLDivElement>) => void;
export type handleDragType = (event: DragEvent<HTMLDivElement>) => void;

export default function FileUploadContainer() {
	const [file, setFile] = useState<File | null>(null);
	const [dragActive, setDragActive] = useState(false);

	const fileName = file?.name ?? "";

	const handleDrop: handleDropType = (event) => {
		event.preventDefault();
		event.stopPropagation();

		const file = event.dataTransfer?.files[0];
		if (file) setFile(file);
		setDragActive(false);
	};

	const handleDrag: handleDragType = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (event.type === "dragenter" || event.type === "dragover") {
			setDragActive(true);
		} else if (event.type === "dragleave") {
			setDragActive(false);
		}
	};
	return (
		<div>
			{/*  TMP */}
			<div style={{ color: "white" }}>Current file: {fileName}</div>

			<FileUploadZone
				handleDrop={handleDrop}
				handleDrag={handleDrag}
				dragActive={dragActive}
			/>
		</div>
	);
}
