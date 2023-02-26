import { ReactNode } from "react";
import VerticalTable from "./VerticalTable";
import HorizontalTable from "./HorizontalTable";
import styles from "./Table.module.scss";
import classNames from "classnames";

export type TableProps = {
	header: string[];
	content: ReactNode[][];
	isVertical?: boolean;
	className?: string;
};
export default function Table(props: TableProps) {
	if (
		(!props.isVertical && props.header.length !== props.content[0].length) ||
		(props.isVertical && props.header.length !== props.content.length)
	) {
		throw new Error("Uneven table");
	}
	const table = props.isVertical ? (
		<VerticalTable {...props} />
	) : (
		<HorizontalTable {...props} />
	);

	return (
		<table className={classNames(styles.Table, props.className)}>{table}</table>
	);
}
