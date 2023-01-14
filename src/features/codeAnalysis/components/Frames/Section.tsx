import styles from "./section.module.scss";
import { getProteinLink } from "../../../../utils/utils";
type SectionProps = {
	acids: string;
	isProtein: boolean;
	startIndex: number;
	frame: number;
};

export function Section({ acids, isProtein, startIndex, frame }: SectionProps) {
	if (isProtein) {
		return (
			<a
				href={getProteinLink(startIndex, frame)}
				className={styles.Highlighted}
			>
				<span>{acids}</span>
			</a>
		);
	}

	return <span>{acids}</span>;
}
