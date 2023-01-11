import { useParams } from "react-router-dom";
import { getRNA } from "../../features/codeAnalysis/utils/transcription";
import { CodeAnalysisMain } from "../../features/codeAnalysis/components/Main/CodeAnalysisMain";

export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = getRNA(sequence);

	if (!rna) return <div> Invalid input </div>;

	return <CodeAnalysisMain rna={rna} />;
}
