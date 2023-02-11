import styles from "./Header.module.scss";

export function Header() {
	return (
		<div className={styles.HeaderClass}>
			<a href="/">
				<img src="../../../../../img/trophy.png" alt="" />
				<p>Motorola Science Cup 2022</p>
			</a>
			<div className={styles.Nav}>
				<a href="/">
					<p>Home</p>
				</a>
				<a href="/about">
					<p>About</p>
				</a>
				<a href="https://github.com/MikolajMydel/msc-2022">
					<p>GitHub</p>
				</a>
			</div>
		</div>
	);
}
