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

	const AnalysisBody = () => {
		if (proteins.length == 0) {
			return (
				<>
					<h1 className={Styles.Title}>Found no proteins</h1>
					<p className={Styles.Tip}>
						Tip: START codon is AUG (DNA) or ATG (DNA) and one of the STOP
						codons is UAA (RNA) or TAA (DNA)
					</p>
				</>
			);
		}

		return (
			<>
				<h1 className={Styles.Title}>
					Found {proteins.length} protein(s)/peptide(s){" "}
				</h1>
				<CodeAndFrames rna={rna} frames={frames} />

				<AnalysisResult proteins={proteins} />
			</>
		);
	};

	return (
		<div className={Styles.Wrapper}>
			<Header></Header>
			<AnalysisBody />
		</div>
	);
}
