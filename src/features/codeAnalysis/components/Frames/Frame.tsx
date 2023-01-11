import { AminoAcid } from "../../../../utils/staticvalues";
import { aminoAcidArrayToSections } from "../../../../utils/stringoperations";
import { v4 as uuid } from "uuid";
import { Section } from "./Section";

type FrameProps = {
	acids: AminoAcid[];
	shift: number;
};

/* RNA Reading frames */
export function Frame({ acids, shift }: FrameProps) {
	const sections = aminoAcidArrayToSections(acids);
	return (
		<div>
			<span> +{shift} </span>
			<span>
				{sections.map((section) => (
					<Section
						key={uuid()}
						acids={section.string}
						isProtein={section.isProtein}
					/>
				))}
			</span>
		</div>
	);
}

type ReadingFramesProps = {
	frames: AminoAcid[][];
};

export function ReadingFrames({ frames }: ReadingFramesProps) {
	return (
		<>
			{frames.map((frame, index) => (
				<Frame key={uuid()} acids={frame} shift={index} />
			))}
		</>
	);
}
