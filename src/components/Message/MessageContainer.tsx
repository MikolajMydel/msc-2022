import { AnimatePresence, motion } from "framer-motion";
import Message from "./Message";
type MessageContainerProps = {
	content: string[];
};

const messageVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

export default function MessageContainer({ content }: MessageContainerProps) {
	return (
		<AnimatePresence>
			{content.map((text) => (
				<motion.div
					key={text}
					variants={messageVariants}
					initial={"hidden"}
					animate={"visible"}
					exit={"hidden"}
					transition={{
						type: "spring",
					}}
				>
					<Message text={text} />
				</motion.div>
			))}
		</AnimatePresence>
	);
}
