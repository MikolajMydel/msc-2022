import styles from "./Codon.module.scss";
import classNames from "classnames";
import { translateCodon } from "../../../../utils/codonOperations";

type CodonProps = {
	nitrogenBases: string;
};
export default function Codon({ nitrogenBases }: CodonProps) {
	const name = translateCodon(nitrogenBases);
	return (
		<div className={styles.Wrapper}>
			<div className={classNames(styles.Codon)}>{nitrogenBases}</div>
			<div className={styles.Name}>{name}</div>
		</div>
	);
}
