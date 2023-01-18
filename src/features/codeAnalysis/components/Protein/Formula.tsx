import styles from "./Formula.module.scss";
import { AminoAcid } from "../../../../utils/staticvalues";
import { useRef, useEffect } from "react";

export function Formula({ acids }: { acids: AminoAcid[] }) {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas?.getContext("2d");
		if (canvas && ctx) {
			canvas.setAttribute("width", acids.length * 22 + "px");
			ctx.font = "20px Arial";
			ctx.fillText(
				acids.map((w) => w.charAt(0)).join("-"),
				10,
				canvas.height / 2
			);
		}
	}, []);
	return <canvas ref={ref} className={styles.Formula} />;
}
