import { v4 as uuid } from "uuid";
import { AminoAcid } from "../../../utils/staticvalues";
import { getShortName } from "../../../utils/staticvalues";

type AcidProps = {
	codon: AminoAcid;
};

function Acid({ codon }: AcidProps) {
	return <span> {getShortName(codon)}</span>;
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
