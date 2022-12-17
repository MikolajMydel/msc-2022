import { useParams } from "react-router-dom";
export default function CodeAnalysis() {
	const { sequence } = useParams();
	return <div>{sequence}</div>;
}

// Retrieve code from URL
// Translate DNA to mRNA (only if code includes T)

// Divide nitrogen bases using 3 different offsets (0, 1, 2)
// Generate amino acids
