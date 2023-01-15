import { ProteinComponent } from "../Protein/Protein";
import { v4 as uuid } from "uuid";
import { Protein } from "../../utils/protein";
type AnalysisResultProps = {
	proteins: Protein[];
};

export function AnalysisResult({ proteins }: AnalysisResultProps) {
	return (
		<>
			<div>
				<h4>Found {proteins.length} protein(s)/peptide(s): </h4>
			</div>
			{proteins.map((protein) => (
				<ProteinComponent key={uuid()} protein={protein} />
			))}
		</>
	);
}
