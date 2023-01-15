import styles from "./Message.module.scss";
export type MessageProps = {
	children: React.ReactNode;
};

export default function Message({ children }: MessageProps) {
	return <div className={styles.Message}>{children}</div>;
}
