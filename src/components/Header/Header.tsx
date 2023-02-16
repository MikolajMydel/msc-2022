import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
export function Header() {
	return (
		<div className={styles.HeaderClass}>
			<Link to={"/"}>
				<img src="../../../../../img/trophy.png" alt="" />
				<p>Motorola Science Cup 2022</p>
			</Link>
			<div className={styles.Nav}>
				<Link to={"/"}>
					<p>Home</p>
				</Link>
				<Link to={"/about"}>
					<p>About</p>
				</Link>
				<a
					href="https://github.com/MikolajMydel/msc-2022"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p>GitHub</p>
				</a>
			</div>
		</div>
	);
}
