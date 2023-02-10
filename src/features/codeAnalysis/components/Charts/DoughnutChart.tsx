import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

type ChartData = {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor: string[];
		borderWidth: number;
		cutout: string;
		spacing: number;
	}[];
};

type ChartDataProps = {
	ChartData: ChartData;
};

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions: object = {
	plugins: {
		legend: {
			labels: {
				color: "white",
				font: {
					size: 14,
					weight: 100,
				},
			},
		},
	},
};

export function DoughnutChart({ ChartData }: ChartDataProps) {
	return <Doughnut data={ChartData} options={chartOptions} />;
}
