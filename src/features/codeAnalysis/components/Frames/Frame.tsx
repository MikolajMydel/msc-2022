import { AminoAcid } from "../../../../utils/staticvalues";
import { aminoAcidArrayToSections } from "../../../../utils/stringoperations";
import { v4 as uuid } from "uuid";
import { Section } from "./Section";
import styles from "./Frame.module.scss";
import classNames from "classnames";

type FrameProps = {
	acids: AminoAcid[];
	shift: number;
};

/* RNA Reading frames */
export function Frame({ acids, shift }: FrameProps) {
	const sections = aminoAcidArrayToSections(acids);
	return (
		<tr className={styles.TableRow}>
			<td className={classNames(styles.TableColumn, styles.Shift)}>+{shift}</td>
			<td className={styles.TableColumn}>
				{sections.map((section) => (
					<Section
						key={uuid()}
						acids={section.string}
						isProtein={section.isProtein}
						startIndex={section.codonIndex}
						frame={shift}
					/>
				))}
			</td>
		</tr>
	);
}

type ReadingFramesProps = {
	frames: AminoAcid[][];
};

export function ReadingFrames({ frames }: ReadingFramesProps) {
	return (
		<table className={styles.Table}>
			<thead className={styles.TableHeading}>
				<td className={styles.TableColumn}>Shift</td>
				<td className={styles.TableColumn}>Sequence</td>
			</thead>

			{frames.map((frame, index) => (
				<Frame key={uuid()} acids={frame} shift={index} />
			))}
		</table>
	);
}
