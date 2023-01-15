import PieChart from "../charts/PieChart";
import { Protein } from "../../utils/protein";
import { AminoAcid} from "../../../../utils/staticvalues";


//Proteins Number Of Amino Acids Chart 
export function ProteinsNumberOfAminoAcidsChart({ proteins }: any ){
  const proteinsNumbering = [];
  for(let i=0;i<proteins.length;i++){
     proteinsNumbering[i] = `protein ${i+1}`;
  } 
  const Chartdata = {
    labels: proteinsNumbering,
    datasets: [
      {
        label: 'Number of amino acids',
        data: proteins.map((protein:Protein) => protein.length),
        backgroundColor: [
          "#2a71d0",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#FF5E5E",
        ],
      }
    ]
  }
	return (
    <div style={{width: '350px'}}>
    <PieChart ChartData={Chartdata} ></PieChart>
    </div>

	);
}

export function AminoAcidsInProteinChart({ protein }: any){
  const Chartdata = {
    labels: Object.keys(AminoAcid).filter(amin => amin),
    datasets: [
      {
        label: `amount of this amino acid in the protein`,
        data: Object.keys(AminoAcid).filter(amin => amin).map(amin => protein.aminoAcidCount(amin)), 
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
      }
    ]
  }
	return (
    <div style={{width: '650px'}}>
      <PieChart ChartData={Chartdata} ></PieChart>
    </div>

	);
}