const DNA_REGEXP = /^[AGCT]+$/i;
const RNA_REGEXP = /^[AGCU]+$/i;

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
		return input.replaceAll(/T/gi, "U").toUpperCase();
	}

	return "";
}
