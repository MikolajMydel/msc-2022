import { getAllFrames, getAllProteins } from "../../utils/translation";
import { CodeAndFrames } from "./Code";
import { AnalysisResult } from "./Result";
import { Header } from "../../../../components/Header/Header";
import Styles from "./CodeAnalysisMain.module.scss";
type CodeAnalysisParams = {
	rna: string;
};

export function CodeAnalysisMain({ rna }: CodeAnalysisParams) {
	const frames = getAllFrames(rna);
	const proteins = getAllProteins(frames);
	return (
		<div className={Styles.Wrapper}>
			<Header></Header>
			<h1 className={Styles.Title}>
				Found {proteins.length} protein(s)/peptide(s){" "}
			</h1>
			<CodeAndFrames rna={rna} frames={frames} />

			<AnalysisResult proteins={proteins} />
		</div>
	);
}
