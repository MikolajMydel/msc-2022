import { useParams } from "react-router-dom";

const DNA_REGEXP = /^[AGCT]+$/;
const RNA_REGEXP = /^[AGCU]+$/;



enum InputType {
	Invalid = 0,
	RNA,
	DNA,
}

function CheckInputType(sequence: string): InputType {	
	if (DNA_REGEXP.test(sequence)) return InputType.DNA;
	else if (RNA_REGEXP.test(sequence)) return InputType.RNA;
	return InputType.Invalid
}

function GetRNA(input: string | undefined): string {
	if (!input) return "";

	const inputType = CheckInputType(input);

	if (inputType == InputType.RNA) { return input; }
	if (inputType == InputType.DNA) { return input.replaceAll('T', 'U'); }
	
	return ""; 
}

export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = GetRNA(sequence);

	if (!rna) return <div> Invalid input </div>;
	return <div> mRNA: {rna} </div>;
}

// Retrieve code from URL
// Translate DNA to mRNA (only if code includes T)

// Divide nitrogen bases using 3 different offsets (0, 1, 2)
// Generate amino acids
