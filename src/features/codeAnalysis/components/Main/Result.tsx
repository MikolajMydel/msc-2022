import { ProteinComponent } from "../Protein/Protein";
import { v4 as uuid } from "uuid";
import { Protein } from "../../utils/protein";
import { ProteinsNumberOfAminoAcidsChart } from "../Protein/ProteinAnalysisChart"
type AnalysisResultProps = {
	proteins: Protein[];
};

export function AnalysisResult({ proteins }: AnalysisResultProps) {
	return (
		<>
			<div>
				<h4>Found {proteins.length} protein(s): </h4>
				<ProteinsNumberOfAminoAcidsChart proteins={proteins}></ProteinsNumberOfAminoAcidsChart>
			</div>
			{proteins.map((protein) => (
				<ProteinComponent key={uuid()} protein={protein} />
			))}
		</>
	);
}
