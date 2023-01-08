import { Protein } from "../../utils/protein";
type ProteinPropertiesProps = {
	protein: Protein;
};

export function ProteinPropertries({ protein }: ProteinPropertiesProps) {
	return (
		<div>
			<p>Number of amino acids: {protein.length}</p>
			<p>Mass: {protein.mass}</p>

			<h5>Found:</h5>
			<p>Frame: {protein.metadata.shift}</p>
			<p>Codon index: {protein.metadata.codonIndex}</p>
		</div>
	);
}
