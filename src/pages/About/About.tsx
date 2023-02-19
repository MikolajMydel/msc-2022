import { Header } from "../../components/Header/Header";
import styles from "./About.module.scss";

export default function About() {
	return (
		<div>
			<Header></Header>
			<div className={styles.Wrapper}>
				<h1 className={styles.Title}>Biology basics</h1>
				<h5 className={styles.BiggerFont}>
					what does the RNA particle look like?
				</h5>
				<p className={styles.SmallerFont}>
					the RNA molecule is single-stranded, although in some places it can
					form double-stranded fragments, joined by hydrogen bonds. Cytosine is
					complementary to guanine and adenine is complementary to uracil
				</p>
				<div></div>
			</div>
		</div>
	);
}
