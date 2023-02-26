import { TableProps } from "./Table";
import styles from "./Table.module.scss";
import { v4 as uuid } from "uuid";

export default function HorizontalTable({ header, content }: TableProps) {
	return (
		<>
			<thead className={styles.TableHeader}>
				<tr>
					{header.map((value) => (
						<td className={styles.TableCell} key={uuid()}>
							{value}
						</td>
					))}
				</tr>
			</thead>
			<tbody>
				{content.map((row) => (
					<tr className={styles.TableRow} key={uuid()}>
						{row.map((cell) => (
							<td className={styles.TableCell} key={uuid()}>
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</>
	);
}
