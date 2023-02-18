import { Protein } from "../../utils/protein";
import { ChemicalComposition } from "./ProteinComposition";
import { AminoAcidsChart } from "../Charts/AminoAcidChart";
import { HydropathyChart } from "../Charts/HydropathyChart";
import { Tooltip } from "./Tooltip";
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
			<AminoAcidsChart protein={protein} />
			<p>
				<Tooltip tooltip="Mass:" tooltiptext="Molecular mass" /> {protein.mass}
			</p>
			<p>
				Chemical formula: <ChemicalComposition atoms={protein.atomCounts} />
			</p>
			<p>
				<Tooltip
					tooltip="Instability index:"
					tooltiptext="Estimate of the stabilty of the protein. Values higher than 40 predict that the protein is unstable."
				/>
				<ProteinStabilityIndex protein={protein} />
			</p>
			<p>Total atom count: {protein.totalAtomCount}</p>
			<p>
				<Tooltip
					tooltip="TGrand Average of Hydropathy:"
					tooltiptext="Average hydropathy value of all amino acids"
				/>
				{protein.hydropathyIndex}
			</p>
			<HydropathyChart protein={protein} />
			<p>
				<Tooltip
					tooltip="Positively charged amino acids:"
					tooltiptext="Number of Arginine and Lysine residues"
				/>
				{protein.positivelyChargedAcids}
			</p>
			<p>
				<Tooltip
					tooltip="Negatively charged amino acids:"
					tooltiptext="Number of Glutamic acid and Aspartic acid residues"
				/>
				{protein.negativelyChargedAcids}
			</p>
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
