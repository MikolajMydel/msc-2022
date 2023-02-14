import styles from "./Codon.module.scss";
import classNames from "classnames";
import { translateCodon } from "../../../../utils/codonOperations";
import { AminoAcid } from "../../../../utils/staticvalues";
import { sequenceTypes } from "../../../../types/biology/codeSequence";
import { convertDNAToRNA } from "../../../../utils/transcription";
type CodonProps = {
	nitrogenBases: string;
	sequenceType: sequenceTypes;
};
export default function Codon({ nitrogenBases, sequenceType }: CodonProps) {
	let name: AminoAcid;
	if (sequenceType == "DNA")
		name = translateCodon(convertDNAToRNA(nitrogenBases));
	else name = translateCodon(nitrogenBases);
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
