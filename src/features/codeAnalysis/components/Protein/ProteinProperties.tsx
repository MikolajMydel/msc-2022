import { Protein } from "../../utils/protein";
import { ChemicalComposition } from "./ProteinComposition";
import  { AminoAcidsInProteinDoughnutChart } from "./ProteinAnalysisChart";


export type ProteinPropertiesProps = {
	protein: Protein;
};

function ProteinStabilityIndex({ protein }: ProteinPropertiesProps) {
	const stability = protein.instabilityIndex;

	if (!stability) {
		return <> Too short to calculate! </>;
	}

	return <>{stability}</>;
}

export function ProteinProperties({ protein }: ProteinPropertiesProps) {
	
	return (
		<div>
			<p>Number of amino acids: {protein.length}</p>
			<AminoAcidsInProteinDoughnutChart protein={protein}></AminoAcidsInProteinDoughnutChart>
			<p>Mass: {protein.mass}</p>
			<p>
				Chemical formula: <ChemicalComposition atoms={protein.atomCounts} />
			</p>
			<p>
				Instability index: <ProteinStabilityIndex protein={protein} />
			</p>
			<p>Total atom count: {protein.totalAtomCount}</p>
			<p>Grand Average of Hydropathy: {protein.hydropathicityIndex}</p>

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
