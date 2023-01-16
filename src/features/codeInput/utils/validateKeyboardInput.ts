import { DNA_REGEXP, RNA_REGEXP } from "../../../utils/sequenceValidation";
import { sequenceTypes } from "../../../types/biology/codeSequence";

const sequenceRegex: Record<sequenceTypes, RegExp> = {
	DNA: DNA_REGEXP,
	RNA: RNA_REGEXP,
};

type isCharacterAllowed = Record<sequenceTypes, boolean>;

export const allowedCharacters: Record<sequenceTypes, string[]> = {
	DNA: ["A", "C", "G", "T"],
	RNA: ["A", "C", "G", "U"],
};

export function isCharacterAllowed(keyCode: string): isCharacterAllowed {
	return Object.entries(sequenceRegex).reduce(function (
		previousValue,
		[sequenceType, regex]
	) {
		return { ...previousValue, [sequenceType]: regex.test(keyCode) };
	},
	{} as isCharacterAllowed);
}
