import { Atoms } from "../../../../utils/staticvalues";
import styles from "./proteins.module.scss";

type ProteinCompositionProps = {
	atoms: Atoms;
};

type AtomProps = {
	symbol: string;
	number: number;
};

function Atom({ symbol, number }: AtomProps) {
	if (!number) return null;

	return (
		<>
			{symbol}
			<span className={styles.sub}>{number}</span>
		</>
	);
}

export function ChemicalComposition({ atoms }: ProteinCompositionProps) {
	return (
		<span>
			<Atom symbol={"C"} number={atoms.Carbon} />
			<Atom symbol={"H"} number={atoms.Hydrogen} />
			<Atom symbol={"N"} number={atoms.Nitrogen} />
			<Atom symbol={"O"} number={atoms.Oxygen} />
			<Atom symbol={"S"} number={atoms.Sulphur} />
		</span>
	);
}
