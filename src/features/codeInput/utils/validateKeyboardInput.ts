import { DNA_REGEXP, RNA_REGEXP } from "../../../utils/sequenceValidation";

const allowedCharacters: RegExp[] = [DNA_REGEXP, RNA_REGEXP];
export const isCharacterAllowed = (keyCode: string): boolean => {
	for (const regex of allowedCharacters) {
		if (regex.test(keyCode)) return true;
	}
	return false;
};
