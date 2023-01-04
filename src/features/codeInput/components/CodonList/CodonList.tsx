import Codon from "./Codon";
import styles from "./Codon.module.scss";
import { v4 as uuidv4 } from "uuid";

type CodonListProps = {
	codons: string[];
};

export default function CodonList({ codons }: CodonListProps) {
	return (
		<div className={styles.CodonList}>
			{codons.map((codon) => (
				<Codon key={uuidv4()} nitrogenBases={codon} />
			))}
		</div>
	);
}
