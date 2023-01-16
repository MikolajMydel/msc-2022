import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
function DoughnutChart({ChartData}:any) {
    const options = {

    }
    return (
        <Doughnut data={ChartData} options={options}/>
    )
}

export default DoughnutChart;