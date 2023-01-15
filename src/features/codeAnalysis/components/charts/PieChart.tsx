import React from "react";
import { Pie } from "react-chartjs-2";
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
function PieChart({ChartData}:any) {
    const options = {

    }
    return (
        <Pie data={ChartData} options={options}/>
    )
}

export default PieChart;