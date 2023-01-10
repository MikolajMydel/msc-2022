import { DNA_REGEXP, RNA_REGEXP } from "../../../utils/sequenceValidation";
import { convertDnaToRna } from "../../../utils/transcription";

enum InputType {
	Invalid = 0,
	RNA,
	DNA,
}

function checkInputType(sequence: string): InputType {
	if (DNA_REGEXP.test(sequence)) return InputType.DNA;
	else if (RNA_REGEXP.test(sequence)) return InputType.RNA;
	return InputType.Invalid;
}

export function getRNA(input: string | undefined): string {
	if (!input) return "";

	const inputType = checkInputType(input);

	if (inputType == InputType.RNA) {
		return input.toUpperCase();
	}
	if (inputType == InputType.DNA) {
		return convertDnaToRna(input).toUpperCase();
	}

	return "";
}
