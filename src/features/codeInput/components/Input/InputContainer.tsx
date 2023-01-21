import {
	convertDNAToRNA,
	convertRNAToDNA,
} from "../../../../utils/transcription";
import { useState, useEffect } from "react";
import Input from "./Input";
import { isCharacterAllowed } from "../../utils/validateKeyboardInput";
import { sequenceTypes } from "../../../../types/biology/codeSequence";

import { handleChangeType, handleKeyDownType } from "../../../../types/events";
import {
	saveInputValue,
	AutosavedValueType,
	retrieveInputValue,
} from "../../utils/localstorage";

const getAnotherSequence = (currentSequence: sequenceTypes) =>
	currentSequence === "RNA" ? "DNA" : "RNA";

export default function InputContainer() {
	const [value, setValue] = useState<string>("");
	const [error, setError] = useState<boolean>(false);
	const [autosaveEnabled, switchAutosave] = useState<boolean>(false);

	const [sequenceType, setSequenceType] = useState<sequenceTypes>("RNA");

	// componentDidMount
	useEffect(() => {
		const autosavedValue = retrieveInputValue();
		setSequenceType(autosavedValue.sequenceType);
		setValue(autosavedValue.value);
	}, []);

	// translate value on sequence type change
	useEffect(() => {
		const newSequenceType = sequenceType;
		convertValue(newSequenceType);
		if (autosaveEnabled) autosave();
	}, [sequenceType]);

	useEffect(() => {
		if (autosaveEnabled) autosave();
	}, [value]);

	const autosave = () => {
		const data: AutosavedValueType = {
			sequenceType: sequenceType,
			value: value,
		};
		saveInputValue(data);
	};

	const enableAutosave = () => {
		switchAutosave(true);
	};

	const convertValue = (newSequenceType: sequenceTypes) => {
		setValue((currentValue) => {
			return newSequenceType === "DNA"
				? convertRNAToDNA(currentValue)
				: convertDNAToRNA(currentValue);
		});
	};

	// called only when character is allowed
	const handleChange: handleChangeType = (event) => {
		if (!autosaveEnabled) enableAutosave();
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
		if (!autosaveEnabled) enableAutosave();
		setSequenceType((currentType) => {
			const newSequenceType = getAnotherSequence(currentType);
			cancelError();
			return newSequenceType;
		});
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
