import {
	AminoAcid,
	AMINO_ACID_PROPERTIES,
	WATER_MASS,
} from "../../../utils/staticvalues";
import { roundFloat } from "../../../utils/utils";
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
		/* add water mass */
		let mass = WATER_MASS;

		this.acids.forEach((acid) => {
			mass += AMINO_ACID_PROPERTIES[acid].Props.Mass;
		});

		return roundFloat(mass, 2);
	}
}
