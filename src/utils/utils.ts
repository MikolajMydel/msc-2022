import { AminoAcid, Atoms, WATER_ATOMS } from "./staticvalues";
import { AMINO_ACID_PROPERTIES, WATER_MASS } from "./staticvalues";
// https://gist.github.com/djD-REK/068cba3d430cf7abfddfd32a5d7903c3
export function roundFloat(number: number, digits: number): number {
	return Number(Math.round(Number(number + "e" + digits)) + "e-" + digits);
}

export function addAtoms(a1: Atoms, a2: Atoms): Atoms {
	return {
		Hydrogen: a1.Hydrogen + a2.Hydrogen,
		Carbon: a1.Carbon + a2.Carbon,
		Oxygen: a1.Oxygen + a2.Oxygen,
		Nitrogen: a1.Nitrogen + a2.Nitrogen,
		Sulphur: a1.Sulphur + a2.Sulphur,
	};
}

export function getMass(acids: AminoAcid[]) {
	/* start with water mass */
	let mass = WATER_MASS;

	acids.forEach((acid) => {
		mass += AMINO_ACID_PROPERTIES[acid].Props.Mass;
	});

	return mass;
}

export function getAtomCount(acids: AminoAcid[]) {
	/* start with water atoms */
	let atoms = WATER_ATOMS;

	acids.forEach((acid) => {
		atoms = addAtoms(atoms, AMINO_ACID_PROPERTIES[acid].Props.Atoms);
	});

	return atoms;
}

export type AcidCount = {
	[key: string]: number;
};

export function getAminoAcidCounts(acids: AminoAcid[]) {
	const counts: AcidCount = {};
	acids.forEach((acid) => {
		counts[acid] ? counts[acid]++ : (counts[acid] = 1);
	});
	return counts;
}

export function getHydropathicityIndex(acids: AminoAcid[]) {
	if (acids.length == 0) return 0;

	let sum = 0;
	acids.forEach((acid) => {
		sum += AMINO_ACID_PROPERTIES[acid].Props.Hydropathicity;
	});
	return sum / acids.length;
}

function getLink(codonIndex: number, frame: number): string {
	return String(codonIndex) + "f" + String(frame);
}

export function getProteinLink(codonIndex: number, frame: number, link = true) {
	if (link) {
		return "#" + getLink(codonIndex, frame);
	}
	return getLink(codonIndex, frame);
}
