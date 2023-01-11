import { AminoAcid } from "../../../../utils/staticvalues";
import { ReadingFrames } from "../Frames/Frame";
type CodeAndFramesParams = {
	rna: string;
	frames: AminoAcid[][];
};

export function CodeAndFrames({ rna, frames }: CodeAndFramesParams) {
	return (
		<>
			<div>mRNA: {rna}</div>
			<div>
				<h3> Reading frames: </h3>
				<div>
					<ReadingFrames frames={frames} />
				</div>
			</div>
		</>
	);
}
