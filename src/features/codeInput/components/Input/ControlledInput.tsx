import {
	HTMLInputTypeAttribute,
	useEffect,
	useRef,
	useState,
	ChangeEvent,
} from "react";
import { handleChangeType, handleKeyDownType } from "./InputContainer";
type ControlledInputProps = {
	value: string;
	onChange?: handleChangeType;
	onKeyDown?: handleKeyDownType;
	type: HTMLInputTypeAttribute;
	className: string;
};
const ControlledInput = (props: ControlledInputProps) => {
	const { value, onChange, ...rest } = props;
	const [cursor, setCursor] = useState<number>(0);
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const input = ref.current;
		if (input) input.setSelectionRange(cursor, cursor);
	}, [ref, cursor, value]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectionStart = event.target.selectionStart;
		if (selectionStart) setCursor(selectionStart);

		// call props onChange handler (if exists)
		onChange && onChange(event);
	};

	return <input ref={ref} value={value} onChange={handleChange} {...rest} />;
};

export default ControlledInput;
