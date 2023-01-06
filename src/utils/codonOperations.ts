import { AminoAcid, CODON_TABLE } from "./staticvalues";
/* Allows for partial codons, for code input */
export function splitIntoCodons(code: string): string[] {
	return code.match(/.{1,3}/g) ?? [];
}

/* Doesn't allow for partial codons, for translation purposes */
export function splitIntoFullCodons(code: string): string[] {
	return code.match(/.{3}/g) ?? [];
}

/* Requires full codons */
export function translateCodon(codon: string): AminoAcid {
	return CODON_TABLE[codon];
}
