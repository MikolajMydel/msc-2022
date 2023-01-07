import { Protein } from "../utils/protein";

type ProteinPropertiesProps = {
	protein: Protein;
};

export function ProteinPropertries({ protein }: ProteinPropertiesProps) {
	return (
		<div>
			<p>Length: {protein.length}</p>
			<p>Frame: {protein.metadata.shift}</p>
			<p>Codon index: {protein.metadata.codonIndex}</p>
		</div>
	);
}
