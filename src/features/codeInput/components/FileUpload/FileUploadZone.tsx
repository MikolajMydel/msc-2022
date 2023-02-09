import {
	handleDragType,
	handleDropType,
	handleChangeType,
} from "../../../../types/events";

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
			<div className={styles.GrayDiv}></div>
			<label className={styles.InputButton}>
				Choose File
				<input type={"file"} onChange={handleChange} multiple={false} />
			</label>
		</div>
	);
}
