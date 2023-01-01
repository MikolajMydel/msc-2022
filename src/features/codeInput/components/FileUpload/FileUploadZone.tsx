import { handleDragType, handleDropType } from "./FileUploadContainer";
import styles from "./FileUpload.module.scss";
import classNames from "classnames";

type FileUploadProps = {
	handleDrop: handleDropType;
	handleDrag: handleDragType;
	dragActive: boolean;
};

export default function FileUploadZone({
	handleDrop,
	handleDrag,
	dragActive,
}: FileUploadProps) {
	return (
		<div
			onDrop={handleDrop}
			onDragEnter={handleDrag}
			onDragOver={handleDrag}
			onDragLeave={handleDrag}
			className={classNames(styles.Zone, {
				[styles.ZoneActive]: dragActive,
			})}
		></div>
	);
}
