import { Protein } from "../../utils/protein";
import { ChemicalComposition } from "./ProteinComposition";
import { AminoAcidsChart } from "../Charts/AminoAcidChart";
import { HydropathyChart } from "../Charts/HydropathyChart";
import styles from "./proteins.module.scss";
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
			<div className={styles.Chart}>
				<AminoAcidsChart protein={protein} />
			</div>
			<p>Mass: {protein.mass}</p>
			<p>
				Chemical formula: <ChemicalComposition atoms={protein.atomCounts} />
			</p>
			<p>
				Instability index: <ProteinStabilityIndex protein={protein} />
			</p>
			<p>Total atom count: {protein.totalAtomCount}</p>
			<p>TGrand Average of Hydropathy: {protein.hydropathyIndex}</p>
			<div className={styles.Chart}>
				<HydropathyChart protein={protein} />
			</div>
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
