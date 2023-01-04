// temporary components just for testing purposes
import { v4 as uuid } from "uuid";
import { AminoAcid } from "../../../utils/staticvalues";
import { getAminoAcids } from "./translation";

type AcidProps = {
	codon: AminoAcid;
};

function Acid({ codon }: AcidProps) {
	return <span> {codon}</span>;
}

type AminoAcidsProps = {
	code: string;
	shift: number;
};

export function AminoAcids({ code, shift }: AminoAcidsProps) {
	const aminoAcidArray = getAminoAcids(code, shift);
	return (
		<p style={{ color: "#fff" }}>
			P+{shift}
			{aminoAcidArray.map((codon) => (
				<Acid key={uuid()} codon={codon} />
			))}
		</p>
	);
}
