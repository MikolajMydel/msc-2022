import styles from "./Header.module.scss";

export default function Header() {
	return (
		<div className={styles.HeaderClass}>
			<img src="../../../../../img/trophy.png" alt="" />
			<p>Motorola Science Cup 2022</p>
		</div>
	);
}
