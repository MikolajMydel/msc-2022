import { ChangeEvent, useState, KeyboardEvent } from "react";
import Input from "./Input";
import { DNA_REGEXP, RNA_REGEXP } from "../../../../utils";

export type handleChangeType = (event: ChangeEvent<HTMLInputElement>) => void;
export type handleKeyDownType = (
	event: KeyboardEvent<HTMLInputElement>
) => void;

const allowedCharacters: RegExp[] = [DNA_REGEXP, RNA_REGEXP];
const isCharacterAllowed = (keyCode: string): boolean => {
	for (const regex of allowedCharacters) {
		if (regex.test(keyCode)) return true;
	}
	return false;
};

export default function InputContainer() {
	const [value, setValue] = useState<string>("");

	const handleChange: handleChangeType = (event) => {
		setValue(event.target.value.toUpperCase());
	};

	const handleKeydown: handleKeyDownType = (event) => {
		const key = event.key;
		if (key.length === 1 && !isCharacterAllowed(key)) event.preventDefault();
	};

	return (
		<Input
			value={value}
			handleChange={handleChange}
			handleKeyDown={handleKeydown}
		/>
	);
}
