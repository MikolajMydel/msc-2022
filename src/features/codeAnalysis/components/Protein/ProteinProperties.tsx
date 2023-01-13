import { Protein } from "../../utils/protein";
import { ChemicalComposition } from "./ProteinComposition";
type ProteinPropertiesProps = {
	protein: Protein;
};

export function ProteinProperties({ protein }: ProteinPropertiesProps) {
	return (
		<div>
			<p>Number of amino acids: {protein.length}</p>
			<p>Mass: {protein.mass}</p>
			<p>
				Chemical formula: <ChemicalComposition atoms={protein.atomCounts} />
			</p>
			<p>Total atom count: {protein.totalAtomCount}</p>
			<p>Grand Average of Hydropathicity: {protein.hydropathicityIndex}</p>

			<p>Positively charged amino acids: {protein.positivelyChargedAcids}</p>
			<p>Negatively charged amino acids: {protein.negativelyChargedAcids}</p>
		</div>
	);
}

export function ProteinPosition({ protein }: ProteinPropertiesProps) {
	return (
		<div>
			<p>Frame: {protein.metadata.shift}</p>
			<p>Codon index: {protein.metadata.codonIndex}</p>
		</div>
	);
}
