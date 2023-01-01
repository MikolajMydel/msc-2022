import {
	handleDragType,
	handleDropType,
	handleChangeType,
} from "./FileUploadContainer";
import styles from "./FileUpload.module.scss";
import classNames from "classnames";

type FileUploadProps = {
	handleDrop: handleDropType;
	handleDrag: handleDragType;
	handleChange: handleChangeType;
	dragActive: boolean;
};

export default function FileUploadZone({
	handleDrop,
	handleDrag,
	dragActive,
	handleChange,
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
		>
			<input type={"file"} onChange={handleChange} multiple={false} />
		</div>
	);
}
