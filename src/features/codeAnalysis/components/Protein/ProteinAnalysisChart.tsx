import { DoughnutChart } from "../charts/DoughnutChart";
import { Protein } from "../../utils/protein";
import { AminoAcid} from "../../../../utils/staticvalues";
import { ProteinPropertiesProps } from "./ProteinProperties";
type DoughnutChartProps = {
  protein: Protein;
};
const chartBackgroundColorChart = ["#C7DFC5", "#001B2E", "#7B6D8D", "#FFEFD3", "#ADB6C4", "#64B6AC", "#3A2E39", "#EDB183", "#1E555C", "#5D737E", "#64B6AC", "#C0FDFB", "#DAFFEF", "#BB9BB0", "#CCBCBC", "#353535", "#E3E7AF", "#A2A77F", "#284B63", "#FFFFFF", "#D9D9D9", "#3C6E71", "#3C6E71"];

export function AminoAcidsInProteinDoughnutChart({protein}: DoughnutChartProps){
  const Chartdata = {
    labels: Object.keys(protein.aminoAcidCounts),
    datasets: [
      {
        label: "amount of this amino acid in the protein",
        data: Object.values(protein.aminoAcidCounts), 
        backgroundColor: chartBackgroundColorChart,
        borderWidth: 0,
        cutout: "75%",
        spacing: 15
      }
    ],

  }
	return (
    <div style={{width: "450px"}}>
      <DoughnutChart ChartData={Chartdata} ></DoughnutChart>
    </div>

	);
}