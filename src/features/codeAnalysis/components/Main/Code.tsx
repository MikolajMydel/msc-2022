import { AminoAcid } from "../../../../utils/staticvalues";
import { Frame } from "../Frames/Frame";
import { v4 as uuid } from "uuid";
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
					{frames.map((frame, index) => (
						<Frame key={uuid()} acids={frame} shift={index} />
					))}
				</div>
			</div>
		</>
	);
}
