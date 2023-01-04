// temporary components just for testing purposes
import { v4 as uuid } from "uuid";
import { AminoAcid } from "../../../utils/staticvalues";

type AcidProps = {
	codon: AminoAcid;
};

function Acid({ codon }: AcidProps) {
	return <span> {codon}</span>;
}

type AminoAcidsProps = {
	acids: AminoAcid[];
};

export function AminoAcids({ acids }: AminoAcidsProps) {
	return (
		<p>
			{acids.map((codon) => (
				<Acid key={uuid()} codon={codon} />
			))}
		</p>
	);
}
