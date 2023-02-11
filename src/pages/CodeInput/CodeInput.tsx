import FileUploadContainer from "../../features/codeInput/components/FileUpload/FileUploadContainer";
import InputContainer from "../../features/codeInput/components/Input/InputContainer";
import styles from "./CodeInput.module.scss";
import { Header } from "../../components/Header/Header";
export default function CodeInput() {
	return (
		<div>
			<Header></Header>
			<div className={styles.InputContainer}>
				<InputContainer />
				<a href="/analysis/">
					<button className={styles.Button}>Check Analyse</button>
				</a>
			</div>
			<FileUploadContainer />
		</div>
	);
}
