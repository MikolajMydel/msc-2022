import {
	Atoms,
	AminoAcid,
	AMINO_ACID_PROPERTIES,
	WATER_MASS,
	WATER_ATOMS,
} from "../../../utils/staticvalues";

import { roundFloat } from "../../../utils/utils";

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

export function getHydropathyIndex(acids: AminoAcid[]) {
	if (acids.length == 0) return 0;

	let sum = 0;
	acids.forEach((acid) => {
		sum += AMINO_ACID_PROPERTIES[acid].Props.Hydropathy;
	});
	return sum / acids.length;
}

export function getHydropathyValues(acids: AminoAcid[]) {
	const values: number[] = [];
	acids.forEach((acid) => {
		values.push(AMINO_ACID_PROPERTIES[acid].Props.Hydropathy);
	});
	return values;
}

function getDipeptideInstabilitySum(acids: AminoAcid[]) {
	let sum = 0.0;

	for (let i = 0; i < acids.length - 1; i++) {
		sum +=
			AMINO_ACID_PROPERTIES[acids[i]].Props.DipeptideInstability[acids[i + 1]];
	}

	return sum;
}

export function getInstabilityIndex(acids: AminoAcid[]) {
	if (acids.length < 2) return undefined;

	return roundFloat(
		(10.0 / acids.length) * getDipeptideInstabilitySum(acids),
		2
	);
}
