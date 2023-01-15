import PieChart from "../charts/PieChart";
import { Protein } from "../../utils/protein";
import { AminoAcid} from "../../../../utils/staticvalues";


//Proteins Number Of Amino Acids Chart 
export function ProteinsNumberOfAminoAcidsChart({ proteins }: any ){
  const proteinNumbering = [];
  for(let i=0;i<proteins.length;i++){
     proteinNumbering[i] = `protein ${i+1}`;
  } 
  const Chartdata = {
    labels: proteinNumbering,
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
          "#72FF5E",
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
        label: 'Number of amino acids',
        data: Object.keys(AminoAcid).filter(amin => amin).map((Amino) => protein.aminoAcidCount(Amino)),
        backgroundColor: [
          "#2a71d0",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#72FF5E",
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