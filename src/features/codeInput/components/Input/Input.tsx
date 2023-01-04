// Input presentation component
import { useEffect } from "react";
import { handleChangeType, handleKeyDownType } from "../../../../types/events";
import styles from "./Input.module.scss";
import CodonList from "../CodonList/CodonList";
import ControlledInput from "./ControlledInput";
import classNames from "classnames";
import { splitIntoCodons } from "../../../../utils/codonOperations";

type InputProps = {
	value: string;
	handleChange: handleChangeType;
	handleKeyDown: handleKeyDownType;
	error: boolean;
	cancelError: () => void;
};

export default function Input({
	value,
	handleChange,
	handleKeyDown,
	error,
	cancelError,
}: InputProps) {
	const codonsArray = splitIntoCodons(value);

	useEffect(() => {
		if (error) setTimeout(cancelError, 1000);
	}, [error]);

	return (
		<div className={styles.Wrapper}>
			<ControlledInput
				className={classNames(styles.Input, {
					[styles.InputError]: error,
				})}
				type={"text"}
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<CodonList codons={codonsArray} />
		</div>
	);
}
