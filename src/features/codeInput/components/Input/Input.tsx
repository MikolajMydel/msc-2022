// Input presentation component
import { handleChangeType } from "./InputContainer";
import styles from "./Input.module.scss";
import CodonList from "../CodonList/CodonList";

type InputProps = {
	value: string;
	handleChange: handleChangeType;
};

export default function Input({ value, handleChange }: InputProps) {
	const codonsArray = value.match(/.{1,3}/g) ?? [];
	return (
		<div className={styles.Input}>
			<input
				className={styles.InputDOMElement}
				type={"text"}
				value={value}
				onChange={handleChange}
				autoFocus={true}
			/>
			<CodonList codons={codonsArray} />
		</div>
	);
}
