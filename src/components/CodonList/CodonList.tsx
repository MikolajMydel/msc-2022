import Codon from "./Codon";
import styles from "./Codon.module.scss";
import { v4 as uuidv4 } from "uuid";
import { sequenceTypes } from "../../types/biology/codeSequence";

type CodonListProps = {
	codons: string[];
	sequenceType: sequenceTypes;
};

export default function CodonList({ codons, sequenceType }: CodonListProps) {
	return (
		<div className={styles.CodonList}>
			{codons.map((codon) => (
				<Codon
					key={uuidv4()}
					nitrogenBases={codon}
					sequenceType={sequenceType}
				/>
			))}
		</div>
	);
}
