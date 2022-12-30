// Input presentation component
import { useEffect } from "react";
import { handleChangeType, handleKeyDownType } from "./InputContainer";
import styles from "./Input.module.scss";
import CodonList from "../CodonList/CodonList";
import ControlledInput from "./ControlledInput";
import classNames from "classnames";

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
	const codonsArray = value.match(/.{1,3}/g) ?? [];

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
