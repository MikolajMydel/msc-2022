import { Protein } from "../../utils/protein";
import { ChemicalComposition } from "./ProteinComposition";
import { AminoAcidsDoughnutChart } from "./ProteinAnalysisChart";
import { HydropathyChart } from "../Charts/HydropathyChart";

export type ProteinPropertiesProps = {
	protein: Protein;
};

function ProteinStabilityIndex({ protein }: ProteinPropertiesProps) {
	if (!protein.instabilityIndex) {
		return <> Too short to calculate! </>;
	}

	return <>{protein.instabilityIndex}</>;
}

export function ProteinProperties({ protein }: ProteinPropertiesProps) {
	return (
		<div>
			<p>Number of amino acids: {protein.length}</p>
			<AminoAcidsDoughnutChart protein={protein} />
			<p>Mass: {protein.mass}</p>
			<p>
				Chemical formula: <ChemicalComposition atoms={protein.atomCounts} />
			</p>
			<p>
				Instability index: <ProteinStabilityIndex protein={protein} />
			</p>
			<p>Total atom count: {protein.totalAtomCount}</p>
			<p>Grand Average of Hydropathy: {protein.hydropathyIndex}</p>
			<HydropathyChart protein={protein} />
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
