import { AminoAcid } from "../../../utils/staticvalues";

export class ProteinMetadata {
	shift = 0;
}

export class Protein {
	acids: AminoAcid[] = [];

	metadata: ProteinMetadata = new ProteinMetadata();

	constructor(acidArray: AminoAcid[], metadata: ProteinMetadata) {
		this.acids = acidArray;
		this.metadata = metadata;
	}
}
