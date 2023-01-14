import styles from "./Message.module.scss";
type MessageProps = {
	text: string;
};

export default function Message({ text }: MessageProps) {
	return <div className={styles.Message}>{text}</div>;
}
