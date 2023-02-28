import { AminoAcid } from "../../../../utils/staticvalues";
import { ReadingFrames } from "../Frames/Frame";
import styles from "./code.module.scss";
import classNames from "classnames";
type CodeAndFramesParams = {
	rna: string;
	frames: AminoAcid[][];
};

export function CodeAndFrames({ rna, frames }: CodeAndFramesParams) {
	return (
		<div className={styles.Wrapper}>
			<div>
				<h1 className={styles.MiniTitle}> mRNA:</h1>
				<div className={classNames(styles.Table, styles.Wrap)}>{rna}</div>
			</div>
			<div>
				<h1 className={styles.MiniTitle}> Reading frames: </h1>
				<div className={styles.Table}>
					<ReadingFrames frames={frames} />
				</div>
			</div>
		</div>
	);
}
