import { ReactNode } from "react";
import VerticalTable from "./VerticalTable";
import HorizontalTable from "./HorizontalTable";

export type TableProps = {
	header: string[];
	content: ReactNode[][];
	isVertical?: boolean;
};
export default function Table(props: TableProps) {
	if (
		(!props.isVertical && props.header.length !== props.content[0].length) ||
		(props.isVertical && props.header.length !== props.content.length)
	) {
		throw new Error("Uneven table");
	}
	if (props.isVertical) return <VerticalTable {...props} />;
	else return <HorizontalTable {...props} />;
}
