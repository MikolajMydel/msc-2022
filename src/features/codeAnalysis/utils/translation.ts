import { AminoAcid, CODON_TABLE } from "./staticvalues";


function shiftRNA(code: string, shift: number): string {
    return code.slice(shift);
}

function splitIntoCodons(code: string): string[] {
    return code.match(/.{1,3}/g) ?? [];
}

export function getAminoAcids(code: string, shift: number): AminoAcid[] {
    const codonsArray = splitIntoCodons(shiftRNA(code, shift));
    
    const aminoAcidArray: AminoAcid[] = [];

    codonsArray.forEach(codon => {
        aminoAcidArray.push(CODON_TABLE[codon]);
    });

    return aminoAcidArray;
}

