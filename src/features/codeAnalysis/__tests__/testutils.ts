import { Protein } from "../utils/protein";
import { AminoAcid } from "../../../utils/staticvalues";

export interface ProteinData {
	correctAcids: AminoAcid[];
	length: number;
	codonIndex: number;
	shift: number;
}

/* utility function */
export function checkProtein(protein: Protein, data: ProteinData): void {
	expect(protein.acids).toStrictEqual(data.correctAcids);
	expect(protein.length).toBe(data.length);

	expect(protein.metadata.codonIndex).toBe(data.codonIndex);
	expect(protein.metadata.shift).toBe(data.shift);
}
