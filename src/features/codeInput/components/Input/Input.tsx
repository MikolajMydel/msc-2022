// Input presentation component

import { handleChange } from "./InputContainer";

type InputProps = {
	value: string;
	onChange: handleChange;
};

export default function Input({ value, onChange }: InputProps) {
	return <input type={"text"} value={value} onChange={onChange} />;
}
