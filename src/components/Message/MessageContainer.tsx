import Message from "./Message";
type MessageContainerProps = {
	text: string;
	isVisible?: boolean;
};

export default function MessageContainer({ text }: MessageContainerProps) {
	return <Message text={text} />;
}
