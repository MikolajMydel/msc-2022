import FileUploadContainer from "../../features/codeInput/components/FileUpload/FileUploadContainer";
import InputContainer from "../../features/codeInput/components/Input/InputContainer";
import styles from "./CodeInput.module.scss";

export default function CodeInput() {
	return (
		<div>
			<div className={styles.InputContainer}>
				<InputContainer />
			</div>
			<FileUploadContainer />
		</div>
	);
}
