import { sequenceTypes } from "../../../types/biology/codeSequence";

const LOCALSTORAGE_AUTOSAVE_KEY = "autosave";

export type AutosavedValueType = {
	sequenceType: sequenceTypes;
	value: string;
};

const DEFAULT_DATA: AutosavedValueType = {
	sequenceType: "RNA",
	value: "",
};

export function retrieveInputValue(): AutosavedValueType {
	const autosavedValue = localStorage?.[LOCALSTORAGE_AUTOSAVE_KEY];
	if (autosavedValue) {
		const asObject: AutosavedValueType = JSON.parse(autosavedValue),
			sequenceType = asObject["sequenceType"],
			value = asObject["value"];

		const conditions = {
			correctSequenceType: sequenceType === "RNA" || sequenceType === "DNA",
			definedValue: typeof value !== "undefined",
		};

		if (conditions.correctSequenceType && conditions.definedValue) {
			return {
				sequenceType,
				value,
			};
		}
	}
	return DEFAULT_DATA;
}

export function saveInputValue(data: AutosavedValueType) {
	saveToLocalStorage(LOCALSTORAGE_AUTOSAVE_KEY, data);
}

function saveToLocalStorage(key: string, value: unknown) {
	localStorage.setItem(key, JSON.stringify(value));
}
