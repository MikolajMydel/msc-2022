import { AminoAcid } from "../../../utils/staticvalues";
import {
	splitIntoFullCodons,
	translateCodon,
} from "../../../utils/codonOperations";
import { Protein, ProteinMetadata } from "../utils/protein";

function shiftRNA(code: string, shift: number): string {
	return code.slice(shift);
}

function getAminoAcids(code: string, shift = 0): AminoAcid[] {
	const codonsArray = splitIntoFullCodons(shiftRNA(code, shift));
	const aminoAcidArray: AminoAcid[] = [];

	codonsArray.forEach((codon) => {
		aminoAcidArray.push(translateCodon(codon));
	});

	return aminoAcidArray;
}

/* private class for getProteins function */
class AnalyserState {
	buffor: AminoAcid[] = [];
	start_index = 0;

	empty(): boolean {
		return this.buffor.length == 0;
	}

	reset() {
		this.buffor = [];
		this.start_index = 0;
	}
}

function getProteins(acids: AminoAcid[], shift: number): Protein[] {
	const proteins: Protein[] = [];
	const state = new AnalyserState();
	acids.forEach((acid, index) => {
		/* start codon */
		if (state.empty()) {
			/* start a new protein */
			if (acid == AminoAcid.Methionine) {
				state.buffor.push(acid);
				state.start_index = index;
			}
		} else {
			if (acid == AminoAcid.STOP) {
				/* create metadata */
				const metadata = new ProteinMetadata();
				metadata.shift = shift;
				metadata.codonIndex = state.start_index;
				/* add protein to proteins array */
				const protein = new Protein(state.buffor, metadata);
				proteins.push(protein);
				state.reset();
			} else {
				state.buffor.push(acid);
			}
		}
	});

	return proteins;
}

export function getAllFrames(code: string): AminoAcid[][] {
	const frames: AminoAcid[][] = [];
	for (let i = 0; i < 3; i++) frames.push(getAminoAcids(code, i));

	return frames;
}

export function getAllProteins(frames: AminoAcid[][]): Protein[] {
	let proteins: Protein[] = [];

	/* loop through all frames values*/
	frames.forEach((frame, i) => {
		proteins = proteins.concat(getProteins(frame, i));
	});
	/* sort proteins by length */
	return proteins.sort((a, b) => b.length - a.length);
}
