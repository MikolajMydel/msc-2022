import { Header } from "../../components/Header/Header";
import styles from "./About.module.scss";

export default function About() {
	return (
		<div>
			<Header></Header>
			<div className={styles.Wrapper}>
				<h1 className={styles.Title}>
					Biology <span className={styles.SecondPart}>basics</span>
				</h1>
				<h5 className={styles.BiggerFont}>
					what does the RNA particle look like?
				</h5>
				<p className={styles.SmallerFont}>
					the RNA molecule is single-stranded, although in some places it can
					form double-stranded fragments, joined by hydrogen bonds. Cytosine is
					complementary to guanine and adenine is complementary to uracil
				</p>
				<div className={styles.Visualization}>
					<div>
						<img src={"../../../../../img/img.png"} alt="" />
					</div>
					<div>
						<h5 className={styles.BiggerFont}>
							Structure of the RNA nucleotide
						</h5>
						<p className={styles.SmallerFont}>
							Each nucleotide composition includes:
						</p>
						<ul>
							<li>
								<span className={styles.Important}>P</span> - The rest of
								phosphoric acid
							</li>
							<li>
								<span className={styles.Important}>R </span>- Ribs
							</li>
							<li>
								One of four nitrogen base:
								<ul className={styles.UlPhosphoricAcid}>
									<li>
										<span className={styles.Important}>A</span>- Adenine
									</li>
									<li>
										<span className={styles.Important}>U</span>- Uracil
									</li>
								</ul>
								<ul className={styles.UlPhosphoricAcid}>
									<li>
										<span className={styles.Important}>G</span>- Guanine
									</li>
									<li>
										<span className={styles.Important}>C</span> - Cytosine
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.Types}>
					<h5 className={styles.BiggerFont}>Functions and Types of RNA:</h5>
					<p className={styles.SmallerFont}>
						RNA takes part primarily in the biosynthesis of proteins. There are
						three main types of RNA: RRNA, MRNA and TRNA
					</p>
					<br />
					<table>
						<thead>
							<tr>
								<th>rRNA (ribosomal RNA)</th>
								<th>mRNA (messenger RNA)</th>
								<th>tRNA (transfer RNA)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									when combined with proteins, it forms ribosomes in which
									protein biosynthesis takes place
								</td>
								<td>
									transfers information about the structure of a protein from
									the cell nucleus to the ribosomes
								</td>
								<td>transports amino acids to ribosomes</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.MiniWrapper}>
					<h5 className={styles.BiggerFont}>What is the genetic code?</h5>
					<p className={styles.SmallerFont}>
						genetic code is a way of storing information about the structure of
						proteins in the sequence of nucleic acids (DNA or mRNA). Consists of
						codons that encode individual amino acids that make up proteins.
						Each code consists of three nucleotides. proteins consist of 20
						amino acids, so if one amino acid was encoded by only one
						nucleotide, there would be only 4 possible combinations. This would
						be far too little, so if the code is ternary then the number of
						possible codons of 64 is sufficient
					</p>
				</div>
				<div className={styles.MiniWrapper}>
					<h5 className={styles.BiggerFont}>
						How genetic information is read?
					</h5>
					<p className={styles.SmallerFont}>
						First, DNA is transcribed into RNA. Only one of the strands that
						make up the DNA molecule (the noncoding strand) undergoes the
						rewriting process. The second strand of DNA is the coding strand,
						that is the gene sequence with information about a given protein. On
						the basis of the information contained in the mRNA, a protein is
						synthesized. Therefore, in practice, individual codons are written
						using mRNA nucleotide symbols. Four codons have a special meaning.
						The <span className={styles.Start}>AUG</span> codon is the START
						codon. At the end of the nucleotide sequence forming the gene, there
						is one of the 3 STOP codons:{" "}
						<span className={styles.Stop}>UUA</span>,{" "}
						<span className={styles.Stop}>UAG</span>,{" "}
						<span className={styles.Stop}>UGA</span>, ending this process
					</p>
				</div>
				<div className={styles.MiniWrapper}>
					<h5 className={styles.BiggerFont}>
						How to determine the sequence of amino acids in a protein?
					</h5>
				</div>
			</div>
		</div>
	);
}
