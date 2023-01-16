import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
type ChartData = {
    labels: string[];
    datasets: {
        label: string;
        data: Number[];
        backgroundColor: string[];
        borderWidth: number;
        cutout: string;
        spacing: number;
  }[];
};
type ChartDataProps = {
    ChartData: ChartData;
}

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
export function DoughnutChart({ChartData}:ChartDataProps,) {
    const Chartoptions:object = {
        plugins: {
            legend: {
              labels: {
                color: "white",  
                font: {
                  size: 12, 
                  weight: 100
                }
              }
            }
          },
    }
    return (
        <Doughnut data={ChartData} options={Chartoptions}/>
    )
}
