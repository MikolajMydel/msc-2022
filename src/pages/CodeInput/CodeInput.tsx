import FileUploadContainer from "../../features/codeInput/components/FileUpload/FileUploadContainer";
import InputContainer from "../../features/codeInput/components/Input/InputContainer";
import styles from "./CodeInput.module.scss";
import { Header } from "../../components/Header/Header";
import { motion } from "framer-motion";

export default function CodeInput() {
	return (
		<motion.div
			initial={{ x: -20, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{
				type: "tween",
				duration: 0.8,
				delay: 0.3,
				ease: [0.25, 0.25, 0.25, 0.75],
			}}
		>
			<Header></Header>
			<div className={styles.InputContainer}>
				<InputContainer />
			</div>
			<FileUploadContainer />
		</motion.div>
	);
}
