import styles from "./tooltip.module.scss";
type TooltipProps = {
	tooltip: string;
	tooltiptext: string;
};

export function Tooltip({ tooltip, tooltiptext }: TooltipProps) {
	return (
		<span className={styles.Tooltip}>
			{`${tooltip}: `} <span className={styles.Tooltiptext}>{tooltiptext}</span>
		</span>
	);
}
