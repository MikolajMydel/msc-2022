import {
	convertDNAToRNA,
	convertRNAToDNA,
} from "../../../../utils/transcription";
import { useState, useEffect } from "react";
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

	// componentDidMount
	useEffect(() => {
		const autosavedValue = localStorage?.["inputPage"];
		if (autosavedValue) {
			const asObject = JSON.parse(autosavedValue),
				sequenceType = Object.keys(asObject)[0];

			if (sequenceType === "DNA" || sequenceType === "RNA") {
				setSequenceType(sequenceType);
				setValue(asObject[sequenceType]);
			}
		}
	}, []);

	// translate value on sequence type change
	useEffect(() => {
		const newSequenceType = sequenceType;
		convertValue(newSequenceType);
	}, [sequenceType]);

	useEffect(() => {
		if (value.length > 0) saveInLocalStorage();
	}, [value]);

	const convertValue = (newSequenceType: sequenceTypes) => {
		setValue((currentValue) => {
			return newSequenceType === "DNA"
				? convertRNAToDNA(currentValue)
				: convertDNAToRNA(currentValue);
		});
	};

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
		setSequenceType((currentType) => {
			const newSequenceType = getAnotherSequence(currentType);
			cancelError();
			return newSequenceType;
		});
	};

	const saveInLocalStorage = () => {
		localStorage.setItem(
			"inputPage",
			JSON.stringify({
				[sequenceType]: value,
			})
		);
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
