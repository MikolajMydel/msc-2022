import { useParams } from "react-router";
export default function Visualization() {
	const { sequence } = useParams();
	return <div>{sequence}</div>;
}
