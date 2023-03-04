import { useParams } from "react-router-dom";
import { getRNA } from "../../features/codeAnalysis/utils/transcription";
import { CodeAnalysisMain } from "../../features/codeAnalysis/components/Main/CodeAnalysisMain";
import { motion } from "framer-motion";
export default function CodeAnalysis() {
	const { sequence } = useParams<{ sequence: string }>();
	const rna = getRNA(sequence);

	if (!rna) return <div> Invalid input </div>;

	return (
		<motion.div
			initial={{ x: -20, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{
				type: "tween",
				duration: 0.8,
				delay: 0.3,
				ease: [0.25, 0.25, 0.25, 0.75],
			}}
		>
			<CodeAnalysisMain rna={rna} />
		</motion.div>
	);
}
