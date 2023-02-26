import { TableProps } from "./Table";
import styles from "./Table.module.scss";
import classNames from "classnames";
import { v4 as uuid } from "uuid";
export default function VerticalTable({ header, content }: TableProps) {
	return (
		<table className={styles.Table}>
			<tbody>
				{content.map((row, index) => (
					<tr className={styles.TableRow} key={uuid()}>
						<th
							className={classNames(styles.TableCell, styles.TableHeader)}
							key={uuid()}
						>
							{header[index]}
						</th>

						{row.map((cell) => (
							<td className={styles.TableCell} key={uuid()}>
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
