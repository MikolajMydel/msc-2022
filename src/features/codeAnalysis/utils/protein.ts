import { AminoAcid } from "../../../utils/staticvalues";
import { roundFloat, getProteinLink } from "../../../utils/utils";
import {
	getMass,
	getAtomCount,
	getAminoAcidCounts,
	getHydropathyIndex,
	getHydropathyValues,
	getInstabilityIndex,
} from "../utils/analysis";

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

	get isProtein() {
		return this.length > 30;
	}

	get mass() {
		return roundFloat(getMass(this.acids), 2);
	}

	get atomCounts() {
		return getAtomCount(this.acids);
	}

	get totalAtomCount() {
		const atoms = this.atomCounts;

		let sum = atoms.Hydrogen;
		sum += atoms.Carbon;
		sum += atoms.Nitrogen;
		sum += atoms.Oxygen;
		sum += atoms.Sulphur;

		return sum;
	}

	// return array of [string]: [number] values
	// representing <aminoacid>: <number of that amino acid in the protein>
	get aminoAcidCounts() {
		return getAminoAcidCounts(this.acids);
	}

	// grand average of hydropathy
	get hydropathyIndex() {
		return roundFloat(getHydropathyIndex(this.acids), 3);
	}
	// returns an array with hydropathy values of amino acids
	get hydropathyValues() {
		return getHydropathyValues(this.acids);
	}

	get positivelyChargedAcids() {
		return (
			this.aminoAcidCount(AminoAcid.Arginine) +
			this.aminoAcidCount(AminoAcid.Lysine)
		);
	}

	get negativelyChargedAcids() {
		return (
			this.aminoAcidCount(AminoAcid.AsparticAcid) +
			this.aminoAcidCount(AminoAcid.GlutamicAcid)
		);
	}

	// returns number of <acid> amino acid in the protein
	aminoAcidCount(acid: AminoAcid) {
		const counts = this.aminoAcidCounts;
		if (acid in counts) return counts[acid];

		return 0;
	}

	get instabilityIndex() {
		return getInstabilityIndex(this.acids);
	}

	get stable() {
		return this.instabilityIndex == undefined
			? undefined
			: this.instabilityIndex < 40;
	}

	// ui-related
	getLink(link = true) {
		return getProteinLink(this.metadata.codonIndex, this.metadata.shift, link);
	}
}
