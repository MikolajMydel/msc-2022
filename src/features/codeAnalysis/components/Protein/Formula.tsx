import { AminoAcid } from "../../../../utils/staticvalues";
import { carbonyl } from "./svgs";
import { useRef, useEffect } from "react";

function draw(
	svg: string,
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number
) {
	const image = new Image();
	image.src = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
	image.addEventListener("load", () => ctx.drawImage(image, x, y));
}

export function canvasFormula({ acids }: { acids: AminoAcid[] }) {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas?.getContext("2d");
		if (canvas && ctx) {
			// set canvas size accordingly to the protein length
			canvas.setAttribute("width", acids.length * 22 + "px");

			draw("<svg></svg>", ctx, 10, 10);
		}
	}, []);
	return <canvas ref={ref} />;
}
export const settings = {
	padding: 40,
	chainLineWidth: 20,
	chainLineHeight: 15,
	carbonylLineLength: 20,
	lineStrokeWidth: 2,
	// fontSize: x
};
export function Formula({ acids }: { acids: AminoAcid[] }) {
	const styles = {
		svg: {
			backgroundColor: "#fff",
			height: 120,
			width: settings.padding * 2 + acids.length * settings.chainLineWidth * 3,
		},
		stroke: {
			fill: "none",
			stroke: "black",
			strokeWidth: settings.lineStrokeWidth,
		},
	};
	const makeChain = () => {
		const ns = []; // Nitrogen symbols
		const carbonyls = [];
		let x = 0;
		let y = 0;
		let path = `M ${x} ${y}`;
		for (let i = 0; i < acids.length; i++) {
			for (let j = 1; j <= 3; j++) {
				x += settings.chainLineWidth;
				y = y == 0 ? settings.chainLineHeight : 0;
				path += `L ${x} ${y} `;
				if (j == 3) {
					ns.push(
						<text x={x - 5} y={y == 0 ? y - 4 : y + 16}>
							N
						</text>
					);
				} else if (j == 2) {
					carbonyls.push(carbonyl(styles.stroke, x, y));
				}
			}
		}
		ns.pop(); // get rid of the last one
		return (
			<g
				transform={`translate(${settings.padding} ${
					styles.svg.height / 2 - settings.chainLineHeight / 2
				})`}
			>
				( opening H2N )
				<text x="-30" y="5">
					<tspan>H</tspan>
					<tspan dy="5">2</tspan>
					<tspan dy="-5">N</tspan>
				</text>
				( Oxygen at the end )
				<text
					x="0"
					y="5"
					transform={`translate(${
						styles.svg.width - settings.padding * 2
					} ${y})`}
				>
					<tspan>OH</tspan>
				</text>
				( the path between )
				<path style={styles.stroke} d={path} />
				{ns}
				{carbonyls}
			</g>
		);
	};
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={styles.svg}>
			{makeChain()}
		</svg>
	);
}
