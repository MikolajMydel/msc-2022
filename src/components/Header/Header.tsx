import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
export function Header() {
	const [open, setOpen] = useState(false);

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
			<img
				className={styles.Hamburger}
				src={"../../../../../img/menu.png"}
				alt="menu"
				onClick={() => setOpen(true)}
			/>
			{open ? (
				<motion.div
					className={styles.MobileMenu}
					initial={{ x: 20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						type: "tween",
						duration: 0.25,
						delay: 0.2,
						ease: [0.25, 0.25, 0.25, 0.75],
					}}
				>
					<div className={styles.Empty}></div>
					<div className={styles.MobileNav}>
						<img
							src={"../../../../../img/close.png"}
							alt=""
							onClick={() => setOpen(false)}
						/>
						<Link to={"/"} onClick={() => setOpen(false)}>
							<p>Home</p>
						</Link>
						<Link to={"/about"} onClick={() => setOpen(false)}>
							<p>About</p>
						</Link>
						<a
							href="https://github.com/MikolajMydel/msc-2022"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setOpen(false)}
						>
							<p>GitHub</p>
						</a>
					</div>
				</motion.div>
			) : null}
		</div>
	);
}
