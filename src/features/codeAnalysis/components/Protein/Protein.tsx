import { getProteinLink } from "../../../../utils/utils";
import { Protein } from "../../utils/protein";
import { AminoAcids } from "../AminoAcid/AminoAcid";
import { ProteinProperties, ProteinPosition } from "./ProteinProperties";
type ProteinLinkProps = {
	protein: Protein;
};

function ProteinLink({ protein }: ProteinLinkProps) {
	return (
		<a
			id={getProteinLink(
				protein.metadata.codonIndex,
				protein.metadata.shift,
				false
			)}
		></a>
	);
}

type ProteinComponentProps = {
	protein: Protein;
};

export function ProteinComponent({ protein }: ProteinComponentProps) {
	return (
		<div>
			<ProteinLink protein={protein} />
			<h5>Protein: </h5>
			<h5>Amino acids: </h5>
			<AminoAcids acids={protein.acids} />
			<h5>Properties: </h5>
			<ProteinProperties protein={protein} />
			<h5>Found: </h5>
			<ProteinPosition protein={protein} />
		</div>
	);
}
