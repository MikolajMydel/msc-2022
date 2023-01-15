import PieChart from "../charts/PieChart";
import { Protein } from "../../utils/protein";

type ProteinPropertiesProps = {
	protein: Protein;
};

//Proteins Number Of Amino Acids Chart
export function ProteinsNumberOfAminoAcidsChart({ proteins }: any ){
  const ProteinNumbering = [];
  for(let i=0;i<proteins.length;i++){
     ProteinNumbering[i] = `protein ${i+1}`;
  }
  
  const Chartdata = {
    labels: ProteinNumbering,
    datasets: [
      {
        label: 'Number of amino acids',
        data: proteins.map((data:any) => data.length),
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
        <PieChart ChartData={Chartdata} ></PieChart>
		
	);
}

