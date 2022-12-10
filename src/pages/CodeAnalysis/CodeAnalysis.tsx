import { useParams } from "react-router-dom";
export default function CodeAnalysis() {
	const { sequence } = useParams();
	return <div>{sequence}</div>;
}
