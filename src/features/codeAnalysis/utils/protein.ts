import { AminoAcid } from "../../../utils/staticvalues";
import { getMass, roundFloat, getAtomCount } from "../../../utils/utils";
export class ProteinMetadata {
	shift = 0;
	/* index of the start codon */
	codonIndex = 0;
}

export class Protein {
	acids: AminoAcid[] = [];

	metadata: ProteinMetadata = new ProteinMetadata();

	constructor(acidArray: AminoAcid[], metadata: ProteinMetadata) {
		this.acids = acidArray;
		this.metadata = metadata;
	}

	get length() {
		return this.acids.length;
	}

	get mass() {
		return roundFloat(getMass(this.acids), 2);
	}

	get atomCounts() {
		return getAtomCount(this.acids);
	}

	get totalAtomCount() {
		let atoms = this.atomCounts;

		let sum = atoms.Hydrogen;
		sum += atoms.Carbon;
		sum += atoms.Nitrogen;
		sum += atoms.Oxygen;
		sum += atoms.Sulphur;

		return sum;
	}
}
