import { getAllFrames, getAllProteins } from "../../utils/translation";
import { CodeAndFrames } from "./Code";
import { AnalysisResult } from "./Result";
import { Header } from "../../../../components/Header/Header";
type CodeAnalysisParams = {
	rna: string;
};

export function CodeAnalysisMain({ rna }: CodeAnalysisParams) {
	const frames = getAllFrames(rna);
	const proteins = getAllProteins(frames);
	return (
		<div style={{ color: "#fff", overflowWrap: "anywhere" }}>
			<Header></Header>

			<CodeAndFrames rna={rna} frames={frames} />

			<AnalysisResult proteins={proteins} />
		</div>
	);
}
