import { getProteinLink } from "../../../../utils/utils";
import { Protein } from "../../utils/protein";
import { AminoAcids } from "../AminoAcid/AminoAcid";
import { ProteinProperties, ProteinPosition } from "./ProteinProperties";
import styles from "./proteins.module.scss";

type ProteinComponentProps = {
	protein: Protein;
};

export function ProteinComponent({ protein }: ProteinComponentProps) {
	const Stable = () => {
		if (protein.stable == undefined) return null;
		return (
			<>
				,{" "}
				{protein.stable ? (
					<span className={styles.stable}>stable</span>
				) : (
					<span className={styles.unstable}>unstable</span>
				)}
			</>
		);
	};
	const Name = () => {
		if (protein.length < 30)
			return (
				<h5>
					<span>Peptide</span>
					<Stable />
				</h5>
			);
		return (
			<h4>
				<span>Protein</span>
				<Stable />
			</h4>
		);
	};

	const ProteinLink = () => {
		return (
			<a
				id={getProteinLink(
					protein.metadata.codonIndex,
					protein.metadata.shift,
					false
				)}
			></a>
		);
	};

	return (
		<div>
			<ProteinLink />
			<Name />
			<h5>Amino acids: </h5>
			<AminoAcids acids={protein.acids} />
			<h5>Properties: </h5>
			<ProteinProperties protein={protein} />
			<h5>Found: </h5>
			<ProteinPosition protein={protein} />
		</div>
	);
}
