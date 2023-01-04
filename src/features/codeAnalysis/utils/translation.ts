import { AminoAcid } from "../../../utils/staticvalues";
import {
	splitIntoCodons,
	translateCodon,
} from "../../../utils/codonOperations";

function shiftRNA(code: string, shift: number): string {
	return code.slice(shift);
}

export function getAminoAcids(code: string, shift = 0): AminoAcid[] {
	const codonsArray = splitIntoCodons(shiftRNA(code, shift));
	const aminoAcidArray: AminoAcid[] = [];

	codonsArray.forEach((codon) => {
		aminoAcidArray.push(translateCodon(codon));
	});

	return aminoAcidArray;
}
