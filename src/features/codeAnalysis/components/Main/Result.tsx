import { ProteinComponent } from "../Protein/Protein";
import { v4 as uuid } from "uuid";
import { Protein } from "../../utils/protein";
import Styles from "./Result.module.scss";
type AnalysisResultProps = {
	proteins: Protein[];
};

export function AnalysisResult({ proteins }: AnalysisResultProps) {
	return (
		<div className={Styles.Wrapper}>
			<div>
				<h1 className={Styles.Title}>
					Found {proteins.length} protein(s)/peptide(s):{" "}
				</h1>
			</div>
			<div>
				{proteins.map((protein) => (
					<ProteinComponent key={uuid()} protein={protein} />
				))}
			</div>
		</div>
	);
}
