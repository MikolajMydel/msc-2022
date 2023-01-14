type MessageProps = {
	text: string;
};

export default function Message({ text }: MessageProps) {
	return <div>{text}</div>;
}
