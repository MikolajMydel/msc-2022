import { AminoAcid } from "../../../../utils/staticvalues";
import { ReadingFrames } from "../Frames/Frame";
import Styles from "./code.module.scss";
type CodeAndFramesParams = {
	rna: string;
	frames: AminoAcid[][];
};

export function CodeAndFrames({ rna, frames }: CodeAndFramesParams) {
	return (
		<div className={Styles.Wrapper}>
			<div>
				<h1 className={Styles.MiniTitle}> mRNA:</h1>
				<div className={Styles.Table}>{rna}</div>
			</div>
			<div>
				<h1 className={Styles.MiniTitle}> Reading frames: </h1>
				<div className={Styles.Table}>
					<ReadingFrames frames={frames} />
				</div>
			</div>
		</div>
	);
}
