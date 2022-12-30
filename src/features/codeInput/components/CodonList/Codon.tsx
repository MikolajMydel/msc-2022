import styles from "./Codon.module.scss";
import { getName } from "../../utils/recognizeAminoAcid";

type CodonProps = {
	nitrogenBases: string;
};
export default function Codon({ nitrogenBases }: CodonProps) {
	const name = getName(nitrogenBases);
	return (
		<div className={styles.Wrapper}>
			<div className={styles.Codon}>{nitrogenBases}</div>
			<div className={styles.Name}>{name}</div>
		</div>
	);
}
