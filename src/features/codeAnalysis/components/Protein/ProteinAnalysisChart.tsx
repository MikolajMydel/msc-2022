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
          "#2a71d0",
          "#ecf0f1",
          "#50AF95",
          "#810000",
          "#2a71d0",
          "#FF5E5E",
          "#72FF5E",
          "#FFFFA4",
          "#266300",
          "#46FFDB",
          "#466AFF",
          "#021358",
          "#D39AFF",
          "#7D7D7D",
          "#540042",
          "#FF48D8",
          "#FF487A",
          "#6F3948",
          "#4B4C1F",
          "#000000",
          "#FFC9C9",
          "#000000",
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