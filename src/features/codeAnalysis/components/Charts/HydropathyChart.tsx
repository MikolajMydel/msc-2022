import { Protein } from "../../utils/protein";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineController,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
} from "chart.js";
import styles from "../Protein/proteins.module.scss";

type HydrpathyChartProps = {
	protein: Protein;
};

ChartJS.register(
	LineController,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement
);

export function HydropathyChart({ protein }: HydrpathyChartProps) {
	// dont render charts for small proteins
	if (protein.length < 5) {
		return null;
	}

	const hydropathy = protein.hydropathyValues;
	const labels = Object.keys(hydropathy).map((i) => i + 1);
	const chartData = {
		labels: labels,
		datasets: [
			{
				label: "Hydropathy",
				data: hydropathy,
				fill: false,
				borderColor: "forestgreen",
			},
		],
	};

	return (
		<div className={styles.hydropathyChart}>
			<Line data={chartData} />
		</div>
	);
}
