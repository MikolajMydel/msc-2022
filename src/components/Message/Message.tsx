import styles from "./Message.module.scss";
import classNames from "classnames";

export type MessageProps = {
	children: React.ReactNode;
	title?: string;
	className?: string;
};

export default function Message({ children, title, className }: MessageProps) {
	const heading = title ? (
		<h3 className={styles.MessageHeading}>{title}</h3>
	) : (
		""
	);

	return (
		<div className={classNames(styles.Message, className)}>
			{heading}
			<div className={styles.MessageChildren}>{children}</div>
		</div>
	);
}
