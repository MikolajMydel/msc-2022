import { useState } from "react";
import Input from "./Input";
import { isCharacterAllowed } from "../../utils/validateKeyboardInput";

import { handleChangeType, handleKeyDownType } from "../../../../types/events";

export default function InputContainer() {
	const [value, setValue] = useState<string>("");
	const [error, setError] = useState<boolean>(false);

	const handleChange: handleChangeType = (event) => {
		setValue(event.target.value.toUpperCase());
	};

	const handleKeydown: handleKeyDownType = (event) => {
		const key = event.key;
		if (key.length === 1 && !isCharacterAllowed(key)) {
			setError(true);
			event.preventDefault();
		}
	};

	const cancelError = () => {
		setError(false);
	};

	return (
		<Input
			value={value}
			handleChange={handleChange}
			handleKeyDown={handleKeydown}
			error={error}
			cancelError={cancelError}
		/>
	);
}
