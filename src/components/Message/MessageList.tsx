import { AnimatePresence, motion } from "framer-motion";
import styles from "./Message.module.scss";
import { v4 as uuidv4 } from "uuid";
import Message, { MessageProps } from "./Message";

type MessageContainerProps = {
	children?:
		| React.ReactElement<MessageProps>
		| React.ReactElement<MessageProps>[];
};

const messageVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

export default function MessageList({ children }: MessageContainerProps) {
	const messages = Array.isArray(children) ? children : [children];

	return (
		<div className={styles.MessageList}>
			<AnimatePresence>
				{messages.map((message) => {
					if (typeof message === "undefined") return "";

					return (
						<motion.div
							key={uuidv4()}
							variants={messageVariants}
							initial={"hidden"}
							animate={"visible"}
							exit={"hidden"}
							transition={{
								type: "spring",
							}}
						>
							<Message {...message.props}>{message.props.children}</Message>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
}
