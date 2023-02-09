import { useState } from "react";
import FileUploadZone from "./FileUploadZone";
import styles from "./FileUpload.module.scss";

import {
	handleChangeType,
	handleDropType,
	handleDragType,
} from "../../../../types/events";

export default function FileUploadContainer() {
	const [file, setFile] = useState<File | null>(null);
	const [dragActive, setDragActive] = useState(false);

	const fileName = file?.name ?? "";

	const handleDrop: handleDropType = (event) => {
		event.preventDefault();
		event.stopPropagation();

		const file = event.dataTransfer?.files[0];
		if (file) updateFile(file);
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

	const handleChange: handleChangeType = (event) => {
		const files = event.target.files;
		if (files && files.length > 0) {
			updateFile(files[0]);
		}
	};

	const updateFile = (file: File) => {
		// TODO: validation
		setFile(file);
	};

	return (
		<div className={styles.Wrapper}>
			<h2 className={styles.FileName}>{fileName}</h2>

			<FileUploadZone
				handleDrop={handleDrop}
				handleDrag={handleDrag}
				dragActive={dragActive}
				handleChange={handleChange}
			/>
		</div>
	);
}
