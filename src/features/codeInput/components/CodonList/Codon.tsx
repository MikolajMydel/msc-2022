import styles from "./Codon.module.scss";
type CodonProps = {
	nitrogenBases: string;
};
export default function Codon({ nitrogenBases }: CodonProps) {
	return <div className={styles.Codon}>{nitrogenBases}</div>;
}
