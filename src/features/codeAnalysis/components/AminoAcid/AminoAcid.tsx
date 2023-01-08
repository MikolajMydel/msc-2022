import { AminoAcid } from "../../../../utils/staticvalues";
import { aminoAcidArrayToString } from "../../../../utils/staticvalues";

type AminoAcidsProps = {
	acids: AminoAcid[];
};

export function AminoAcids({ acids }: AminoAcidsProps) {
	return <p>{aminoAcidArrayToString(acids)}</p>;
}
