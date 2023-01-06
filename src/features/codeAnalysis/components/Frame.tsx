import { AminoAcid } from "../../../utils/staticvalues";
import { aminoAcidArrayToString } from "../../../utils/staticvalues";

type FrameProps = {
	acids: AminoAcid[];
	shift: number;
};

/* RNA Reading frames */
export function Frame({ acids, shift }: FrameProps) {
	return (
		<div>
			<span>+{shift}</span> <span>{aminoAcidArrayToString(acids)}</span>
		</div>
	);
}
