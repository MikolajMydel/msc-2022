import { AminoAcid } from "../../../utils/staticvalues";
import {
	splitIntoCodons,
	translateCodon,
} from "../../../utils/codonOperations";
import { Protein, ProteinMetadata } from "../utils/protein";

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

/* private class for getProteins function */
class AnalyserState {
	buffor: AminoAcid[] = [];

	empty(): boolean {
		return this.buffor.length == 0;
	}

	reset() {
		this.buffor = [];
	}
}

export function getProteins(acids: AminoAcid[], shift: number): Protein[] {
	const baseMetadata: ProteinMetadata = new ProteinMetadata();
	baseMetadata.shift = shift;

	const proteins: Protein[] = [];
	const state = new AnalyserState();

	acids.forEach((acid, index) => {
		/* start codon */
		if (state.empty()) {
			/* start a new protein */
			if (acid == AminoAcid.Methionine) {
				state.buffor.push(acid);
			}
		} else {
			if (acid == AminoAcid.STOP) {
				/* create new metadata */
				const newMetadata = baseMetadata;
				newMetadata.codonIndex = index;
				/* add protein to proteins array */
				const protein = new Protein(state.buffor, newMetadata);

				proteins.push(protein);
				state.reset();
			} else {
				state.buffor.push(acid);
			}
		}
	});

	return proteins;
}

export function getAllProteins(code: string): Protein[] {
	let proteins: Protein[] = [];

	/* loop through all possible shift values*/
	for (let i = 0; i < 3; i++) {
		const aminoAcids = getAminoAcids(code, i);
		proteins = proteins.concat(getProteins(aminoAcids, i));
	}

	return proteins;
}
