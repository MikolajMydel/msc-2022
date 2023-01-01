import { useParams } from "react-router-dom";
import { getRNA } from "../../features/codeAnalysis/utils/transcription";

export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = getRNA(sequence);

	if (!rna) return <div> Invalid input </div>;
	return <div> mRNA: {rna} </div>;
}
