import styles from "./Codon.module.scss";
import classNames from "classnames";
import { translateCodon } from "../../../../utils/codonOperations";
import { AminoAcid } from "../../../../utils/staticvalues";

type CodonProps = {
	nitrogenBases: string;
};
export default function Codon({ nitrogenBases }: CodonProps) {
	const name = translateCodon(nitrogenBases);

	return (
		<div className={styles.Wrapper}>
			<div
				className={classNames(styles.Codon, {
					[styles.CodonStart]: name === AminoAcid.Methionine,
					[styles.CodonStop]: name === AminoAcid.STOP,
				})}
			>
				{nitrogenBases}
			</div>
			<div className={styles.Name}>{name}</div>
		</div>
	);
}
