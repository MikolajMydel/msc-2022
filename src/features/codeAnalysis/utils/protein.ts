import { AminoAcid } from "../../../utils/staticvalues";

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
}
