// Input presentation component
import { handleChangeType, handleKeyDownType } from "./InputContainer";
import styles from "./Input.module.scss";
import CodonList from "../CodonList/CodonList";

type InputProps = {
	value: string;
	handleChange: handleChangeType;
	handleKeyDown: handleKeyDownType;
};

export default function Input({
	value,
	handleChange,
	handleKeyDown,
}: InputProps) {
	const codonsArray = value.match(/.{1,3}/g) ?? [];
	return (
		<div className={styles.Input}>
			<input
				className={styles.InputDOMElement}
				type={"text"}
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<CodonList codons={codonsArray} />
		</div>
	);
}
