import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ProteinComponent } from "../../features/codeAnalysis/components/Protein";
import { getRNA } from "../../features/codeAnalysis/utils/transcription";
import {
	getAllFrames,
	getAllProteins,
} from "../../features/codeAnalysis/utils/translation";
import { Frame } from "../../features/codeAnalysis/components/Frame";
export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = getRNA(sequence);

	if (!rna) return <div> Invalid input </div>;
	const frames = getAllFrames(rna);
	const proteins = getAllProteins(frames);

	return (
		<div style={{ color: "#fff" }}>
			<div>mRNA: {rna}</div>
			<div>
				<h3> Reading frames: </h3>
				<div>
					{frames.map((frame, index) => (
						<Frame key={uuid()} acids={frame} shift={index} />
					))}
				</div>
			</div>

			<div>
				<h4>Found {proteins.length} proteins: </h4>
			</div>
			{proteins.map((protein) => (
				<ProteinComponent key={uuid()} protein={protein} />
			))}
		</div>
	);
}
