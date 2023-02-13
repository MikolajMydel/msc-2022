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
			<div></div>
			<div>
				{proteins.map((protein) => (
					<ProteinComponent key={uuid()} protein={protein} />
				))}
			</div>
		</div>
	);
}
