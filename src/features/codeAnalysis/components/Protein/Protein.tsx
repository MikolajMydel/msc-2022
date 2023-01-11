import { Protein } from "../../utils/protein";
import { AminoAcids } from "../AminoAcid/AminoAcid";
import { ProteinPropertries, ProteinPosition } from "./ProteinProperties";

type ProteinComponentProps = {
	protein: Protein;
};

export function ProteinComponent({ protein }: ProteinComponentProps) {
	return (
		<div>
			<h5>Protein: </h5>
			<h5>Amino acids: </h5>
			<AminoAcids acids={protein.acids} />
			<h5>Properties: </h5>
			<ProteinPropertries protein={protein} />
			<h5>Found: </h5>
			<ProteinPosition protein={protein} />
		</div>
	);
}
