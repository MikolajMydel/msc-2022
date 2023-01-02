import { useParams } from "react-router-dom";
import { getRNA } from "../features/codeAnalysis/utils/transcription";
import { AminoAcids } from "../features/codeAnalysis/utils/translation";


export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = getRNA(sequence);

	if (!rna) return <div> Invalid input </div>;
	return <div> 
			<p>mRNA: {rna}</p>
			<p><AminoAcids code={ rna } shift={ 0 } /></p>
			<p><AminoAcids code={ rna } shift={ 1 } /></p>
			<p><AminoAcids code={ rna } shift={ 2 } /></p>
		</div>;
}

// Retrieve code from URL
// Translate DNA to mRNA (only if code includes T)

// Divide nitrogen bases using 3 different offsets (0, 1, 2)
// Generate amino acids
