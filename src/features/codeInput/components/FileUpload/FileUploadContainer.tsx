import { useState } from "react";
import FileUploadZone from "./FileUploadZone";
import styles from "./FileUpload.module.scss";
import { useNavigate } from "react-router-dom";
import {
	handleChangeType,
	handleDropType,
	handleDragType,
} from "../../../../types/events";

export default function FileUploadContainer() {
	const [file, setFile] = useState<File | null>(null);
	const [dragActive, setDragActive] = useState(false);
	const fileName = file?.name ?? "";
	const navigate = useNavigate();

	const handleDrop: handleDropType = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setDragActive(false);

		const file = event.dataTransfer?.files[0];
		updateFile(file);
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
		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = () => {
			navigate(`/analysis/${reader.result}`);
		};
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
