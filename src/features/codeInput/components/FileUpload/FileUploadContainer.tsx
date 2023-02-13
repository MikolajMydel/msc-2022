import { useState } from "react";
import FileUploadZone from "./FileUploadZone";
import styles from "./FileUpload.module.scss";
import { Link } from "react-router-dom";

import {
	handleChangeType,
	handleDropType,
	handleDragType,
} from "../../../../types/events";

export default function FileUploadContainer() {
	const [file, setFile] = useState<File | null>(null);
	const [dragActive, setDragActive] = useState(false);
	const [fileContent, setFileContent] = useState();
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

		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = () => {
			setFileContent(reader.result);
			<Link to={`/analysis/${fileContent}`}></Link>;
		};
	};
	return (
		<div className={styles.Wrapper}>
			<h2 className={styles.FileName}>{fileName}</h2>
			<div className={styles.ButtonWrapper}>
				<Link to={`/analysis/${fileContent}`}>
					<button className={styles.AnalysisButton}>
						Analysis [file data]
					</button>
				</Link>
			</div>
			<FileUploadZone
				handleDrop={handleDrop}
				handleDrag={handleDrag}
				dragActive={dragActive}
				handleChange={handleChange}
			/>
		</div>
	);
}
