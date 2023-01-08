import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import { handleChangeType, handleKeyDownType } from "../../../../types/events";
import { sequenceTypes } from "../../../../types/biology/codeSequence";
import classNames from "classnames";
import styles from "./Input.module.scss";

type ControlledInputProps = {
	value: string;
	onChange?: handleChangeType;
	onKeyDown?: handleKeyDownType;
	type: HTMLInputTypeAttribute;
	className: string;
	sequenceType: sequenceTypes;
	switchSequenceType: () => void;
};

export default function ControlledInput(props: ControlledInputProps) {
	const {
		value,
		onChange,
		onKeyDown,
		sequenceType,
		switchSequenceType,
		className,
		...rest
	} = props;
	const [cursor, setCursor] = useState<number>(0);
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const input = ref.current;
		if (input) input.setSelectionRange(cursor, cursor);
	}, [ref, cursor, value]);

	const handleChange: handleChangeType = (event) => {
		const selectionStart = event.target.selectionStart;
		if (selectionStart) setCursor(selectionStart);

		// call props onChange handler (if exists)
		onChange && onChange(event);
	};

	const handleKeyDown: handleKeyDownType = (event) => {
		if (event.key === "backspace") {
			setCursor((currentCursor) => {
				return currentCursor - 1;
			});
		}
		// call props onKeyDown handler (if exists)
		onKeyDown && onKeyDown(event);
	};

	return (
		<div className={styles.Input}>
			<button onClick={switchSequenceType}>{sequenceType}</button>
			<input
				className={classNames(styles.InputHTMLElement, className)}
				ref={ref}
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				{...rest}
			/>
		</div>
	);
}
