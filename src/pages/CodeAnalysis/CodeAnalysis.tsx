import { useParams } from "react-router-dom";
import { getRNA } from "../../features/codeAnalysis/utils/transcription";
import { AminoAcids } from "../../features/codeAnalysis/components/test_component";

export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = getRNA(sequence);

	if (!rna) return <div> Invalid input </div>;
	return (
		<div>
			<div>mRNA: {rna}</div>
			<div>
				<AminoAcids code={rna} shift={0} />
			</div>
			<div>
				<AminoAcids code={rna} shift={1} />
			</div>
			<div>
				<AminoAcids code={rna} shift={2} />
			</div>
		</div>
	);
}
