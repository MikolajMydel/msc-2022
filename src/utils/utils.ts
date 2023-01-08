import { Atoms } from "./staticvalues";

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
