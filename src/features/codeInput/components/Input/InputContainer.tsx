import { ChangeEvent, useState } from "react";
import Input from "./Input";

export type handleChangeType = (event: ChangeEvent<HTMLInputElement>) => void;

export default function InputContainer() {
	const [value, setValue] = useState<string>("");

	const handleChange: handleChangeType = (event) => {
		setValue(event.target.value.toUpperCase());
	};

	return <Input value={value} handleChange={handleChange} />;
}
