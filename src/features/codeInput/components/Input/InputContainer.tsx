import { useState } from "react";
import Input from "./Input";
import { ChangeEvent } from "react";

export type handleChange = (event: ChangeEvent<HTMLInputElement>) => void;

export default function InputContainer() {
	const [value, setValue] = useState("");

	const handleChange: handleChange = (event) => {
		setValue(event.target.value);
	};

	return <Input value={value} onChange={handleChange} />;
}
