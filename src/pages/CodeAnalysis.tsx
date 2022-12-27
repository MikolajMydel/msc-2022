import { useParams } from "react-router-dom";
import { getRNA } from "../features/codeAnalysis/utils/transcription";

export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = getRNA(sequence);

	if (!rna) return <div> Invalid input </div>;
	return <div> mRNA: {rna} </div>;
}

// Retrieve code from URL
// Translate DNA to mRNA (only if code includes T)

// Divide nitrogen bases using 3 different offsets (0, 1, 2)
// Generate amino acids
