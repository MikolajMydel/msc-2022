import { useState } from "react";
import Input from "./Input";
import { isCharacterAllowed } from "../../utils/validateKeyboardInput";
import { sequenceTypes } from "../../../../types/biology/codeSequence";

import { handleChangeType, handleKeyDownType } from "../../../../types/events";

const getAnotherSequence = (currentSequence: sequenceTypes) =>
	currentSequence === "RNA" ? "DNA" : "RNA";

export default function InputContainer() {
	const [value, setValue] = useState<string>("");
	const [error, setError] = useState<boolean>(false);

	const [sequenceType, setSequenceType] = useState<sequenceTypes>("RNA");

	const handleChange: handleChangeType = (event) => {
		setValue(event.target.value.toUpperCase());
	};

	const handleKeydown: handleKeyDownType = (event) => {
		const key = event.key;
		const isAllowed = isCharacterAllowed(key)[sequenceType];
		if (key.length === 1 && !isAllowed) {
			setError(true);
			event.preventDefault();
		}
	};

	const cancelError = () => {
		setError(false);
	};

	const switchSequenceType = () => {
		setSequenceType((currentType) => getAnotherSequence(currentType));
	};

	return (
		<Input
			value={value}
			handleChange={handleChange}
			handleKeyDown={handleKeydown}
			error={error}
			cancelError={cancelError}
			sequenceType={sequenceType}
			switchSequenceType={switchSequenceType}
		/>
	);
}
