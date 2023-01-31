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
	fontSize: 16,
	fontFamily: "Arial",
	backgroundColor: "#eee",
	color: "#111",
};
export function Formula({ acids }: { acids: AminoAcid[] }) {
	const svgStyle = {
		backgroundColor: settings.backgroundColor,
		height: 120,
		width: settings.padding * 2 + acids.length * settings.chainLineWidth * 3,
	};
	const styles = {
		fill: "none",
		stroke: settings.color,
		strokeWidth: settings.lineStrokeWidth,
		fontSize: settings.fontSize,
		fontFamily: settings.fontFamily,
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
						<text
							x={x - settings.fontSize * 0.3}
							y={y == 0 ? y - settings.fontSize * 0.25 : y + settings.fontSize}
						>
							N
						</text>
					);
				} else if (j == 2) {
					carbonyls.push(carbonyl(x, y));
				}
			}
		}
		ns.pop(); // get rid of the last one
		return (
			<g
				transform={`translate(${settings.padding} ${
					svgStyle.height / 2 - settings.chainLineHeight / 2
				})`}
				style={styles}
			>
				( opening H2N )
				<text
					x={`${-2 * styles.fontSize - 2}`}
					y={`${styles.fontSize / 4}`}
					style={{ paintOrder: "fill" }}
				>
					<tspan>H</tspan>
					<tspan dy="5">2</tspan>
					<tspan dy="-5">N</tspan>
				</text>
				( Oxygen at the end )
				<text
					x={`2`}
					y={`${styles.fontSize / 4}`}
					transform={`translate(${svgStyle.width - settings.padding * 2} ${y})`}
				>
					<tspan>OH</tspan>
				</text>
				( the path between )
				<path d={path} />
				{ns}
				{carbonyls}
			</g>
		);
	};
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
			<style>
				{`
                    text {
                        stroke-width: 1px;
                        fill: ${styles.stroke};
                    }
                `}
			</style>
			{makeChain()}
		</svg>
	);
}
