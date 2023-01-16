import DoughnutChart from "../charts/DoughnutChart";
import { Protein } from "../../utils/protein";
import { AminoAcid} from "../../../../utils/staticvalues";
import { ProteinPropertiesProps } from "./ProteinProperties"

export function AminoAcidsInProteinDoughnutChart({protein}: any){
  const Chartdata = {
    labels: Object.keys(AminoAcid).filter(amin => amin),
    datasets: [
      {
        label: `amount of this amino acid in the protein`,
        data: Object.keys(AminoAcid).filter(data => data).map(data => protein.aminoAcidCount(data)), 
        backgroundColor: [
          "#001B2E",
          "#C7DFC5",
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
        ],
        borderWidth: 0,
        cutout: '85%',
        spacing: 15
      }
    ]
  }
	return (
    <div style={{width: '450px'}}>
      <DoughnutChart ChartData={Chartdata} ></DoughnutChart>
    </div>

	);
}