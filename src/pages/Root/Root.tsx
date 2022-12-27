import { Outlet } from "react-router-dom";
import styles from "./Root.module.scss";
export default function Root() {
	return (
		<div className={styles.Root}>
			<Outlet />
		</div>
	);
}
