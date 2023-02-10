import { useState } from "react";
import { Protein } from "../../utils/protein";
import { AminoAcids } from "../AminoAcid/AminoAcid";
import { ProteinProperties, ProteinPosition } from "./ProteinProperties";
import styles from "./proteins.module.scss";

type ProteinComponentProps = {
	protein: Protein;
};

export function ProteinComponent({ protein }: ProteinComponentProps) {
	// get stability (stable/unstable)
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

	// get name (peptide/protein)
	const Name = () => {
		return (
			<h5 className={protein.isProtein ? styles.protein : styles.peptide}>
				<span>{protein.isProtein ? "Protein" : "Peptide"}</span>
				<Stable />
			</h5>
		);
	};

	// get protein link
	const ProteinLink = () => {
		return <a id={protein.getLink(false)}></a>;
	};

	const [expanded, expand] = useState(protein.isProtein);

	// returns a link, name and amino acids
	const BasicInfo = () => {
		return (
			<div>
				<ProteinLink />
				<Name />
				<h5 className={styles.BiggerFont}>Amino acids: </h5>
				<div className={styles.SmallerFont}>
					<AminoAcids acids={protein.acids} />
				</div>
			</div>
		);
	};

	if (expanded) {
		return (
			<div>
				<BasicInfo />
				<h5 className={styles.BiggerFont}>Properties: </h5>
				<div className={styles.SmallerFont}>
					<ProteinProperties protein={protein} />
				</div>

				<h5 className={styles.BiggerFont}>Found: </h5>
				<div className={styles.SmallerFont}>
					<ProteinPosition protein={protein} />
				</div>
			</div>
		);
	}

	return (
		<div>
			<BasicInfo />
			<button onClick={() => expand(true)}>
				<span>Show more</span>
			</button>
		</div>
	);
}
