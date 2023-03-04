import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import {
	handleChangeType,
	handleKeyDownType,
	handlePasteType,
} from "../../types/events";

type ControlledInputProps = {
	value: string;
	onChange?: handleChangeType;
	onKeyDown?: handleKeyDownType;
	onPaste?: handlePasteType;
	type: HTMLInputTypeAttribute;
	className?: string;
};

export default function ControlledInput(props: ControlledInputProps) {
	const { value, onChange, onKeyDown, ...rest } = props;
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
		<input
			ref={ref}
			value={value}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			{...rest}
		/>
	);
}
