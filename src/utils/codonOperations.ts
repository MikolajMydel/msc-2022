import { AminoAcid, CODON_TABLE } from "./staticvalues";
export function splitIntoCodons(code: string): string[] {
	return code.match(/.{1,3}/g) ?? [];
}

export function translateCodon(codon: string): AminoAcid {
	return CODON_TABLE[codon];
}
