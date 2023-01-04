import { Protein } from "../utils/protein";
import { AminoAcids } from "./aminoacid";

type ProteinComponentProps = {
	protein: Protein;
};

export function ProteinComponent({ protein }: ProteinComponentProps) {
	return (
		<div>
			<h5>Protein: </h5>
			<h5>Amino acids: </h5>
			<AminoAcids acids={protein.acids} />
		</div>
	);
}
