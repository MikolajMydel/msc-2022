import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ProteinComponent } from "../../features/codeAnalysis/components/protein";
import { getRNA } from "../../features/codeAnalysis/utils/transcription";
import { getAllProteins } from "../../features/codeAnalysis/utils/translation";

export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = getRNA(sequence);

	if (!rna) return <div> Invalid input </div>;

	const proteins = getAllProteins(rna);

	return (
		<div style={{ color: "#fff" }}>
			<div>mRNA: {rna}</div>
			<div>
				{" "}
				<h4>Found {proteins.length} proteins: </h4>{" "}
			</div>
			{proteins.map((protein) => (
				<ProteinComponent key={uuid()} protein={protein} />
			))}
		</div>
	);
}
