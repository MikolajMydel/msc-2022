import { AminoAcid } from "../../../../utils/staticvalues";
import { ReadingFrames } from "../Frames/Frame";
import styles from "./code.module.scss";
import classNames from "classnames";
import { useState } from "react";

type CodeAndFramesParams = {
	rna: string;
	frames: AminoAcid[][];
};

export function CodeAndFrames({ rna, frames }: CodeAndFramesParams) {
	function switchVisibility() {
		changeVisibility((isVisible) => !isVisible);
	}
	const [isVisible, changeVisibility] = useState<boolean>(false);
	return (
		<div className={styles.Wrapper}>
			<div>
				<h1 className={styles.MiniTitle}> mRNA:</h1>
				<div
					className={classNames(styles.Table, styles.Wrap, {
						[styles.WrapVisible]: isVisible,
					})}
					onClick={() => switchVisibility()}
				>
					{rna}
				</div>
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
