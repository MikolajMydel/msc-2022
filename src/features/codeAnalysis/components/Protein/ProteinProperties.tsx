import { Protein } from "../../utils/protein";
import { ChemicalComposition } from "./ProteinComposition";
type ProteinPropertiesProps = {
	protein: Protein;
};

export function ProteinPropertries({ protein }: ProteinPropertiesProps) {
	return (
		<div>
			<p>Number of amino acids: {protein.length}</p>
			<p>Mass: {protein.mass}</p>
			<p>
				Chemical formula: <ChemicalComposition atoms={protein.atomCounts} />
			</p>
			<p>Total atom count: {protein.totalAtomCount}</p>
			<h5>Found:</h5>
			<p>Frame: {protein.metadata.shift}</p>
			<p>Codon index: {protein.metadata.codonIndex}</p>
		</div>
	);
}
