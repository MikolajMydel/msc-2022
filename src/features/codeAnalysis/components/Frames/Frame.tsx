import { AminoAcid } from "../../../../utils/staticvalues";
import { aminoAcidArrayToSections } from "../../../../utils/stringoperations";
import { v4 as uuid } from "uuid";
import { Section } from "./Section";
import Table from "../../../../components/Table/Table";

type FrameProps = {
	acids: AminoAcid[];
	shift: number;
};

/* RNA Reading frames */
function getFrame({ acids, shift }: FrameProps) {
	const sections = aminoAcidArrayToSections(acids);
	return [
		<div key={shift}>{shift}</div>,
		sections.map((section) => (
			<Section
				key={uuid()}
				acids={section.string}
				isProtein={section.isProtein}
				startIndex={section.codonIndex}
				frame={shift}
			/>
		)),
	];
}

type ReadingFramesProps = {
	frames: AminoAcid[][];
};

export function ReadingFrames({ frames }: ReadingFramesProps) {
	return (
		<Table
			header={["Shift", "Sequence"]}
			content={frames.map((frame, index) => {
				return getFrame({
					acids: frame,
					shift: index,
				});
			})}
		/>
	);
}
