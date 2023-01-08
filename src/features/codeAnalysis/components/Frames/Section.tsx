import styles from "./section.module.scss";

type SectionProps = {
	acids: string;
	isProtein: boolean;
};

export function Section({ acids, isProtein }: SectionProps) {
	if (isProtein) {
		return <span className={styles.Highlighted}>{acids}</span>;
	}

	return <span> {acids} </span>;
}
