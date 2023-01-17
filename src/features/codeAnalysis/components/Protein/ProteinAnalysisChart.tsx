import { DoughnutChart } from "../Charts/DoughnutChart";
import { Protein } from "../../utils/protein";
import styles from "./proteins.module.scss";

type DoughnutChartProps = {
	protein: Protein;
};

const chartBackgroundColors = [
	"#C7DFC5",
	"#001B2E",
	"#7B6D8D",
	"#FFEFD3",
	"#ADB6C4",
	"#64B6AC",
	"#3A2E39",
	"#EDB183",
	"#1E555C",
	"#5D737E",
	"#64B6AC",
	"#C0FDFB",
	"#DAFFEF",
	"#BB9BB0",
	"#CCBCBC",
	"#353535",
	"#E3E7AF",
	"#A2A77F",
	"#284B63",
	"#FFFFFF",
	"#D9D9D9",
	"#3C6E71",
	"#3C6E71",
];

export function AminoAcidsDoughnutChart({ protein }: DoughnutChartProps) {
	// dont render charts for small proteins
	if (protein.length < 5) {
		return null;
	}

	const chartData = {
		labels: Object.keys(protein.aminoAcidCounts),
		datasets: [
			{
				label: "Count",
				data: Object.values(protein.aminoAcidCounts),
				backgroundColor: chartBackgroundColors,
				borderWidth: 0,
				cutout: "75%",
				spacing: 15,
			},
		],
	};

	return (
		<div className={styles.doughnutChart}>
			<DoughnutChart ChartData={chartData} />
		</div>
	);
}
