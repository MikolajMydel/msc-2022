import { AminoAcid, svgs } from "../../../../utils/staticvalues";
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

			// test draw
			draw(svgs.circle, ctx, 10, 10);
		}
	}, []);
	return <canvas ref={ref} />;
}

export function Formula({ acids }: { acids: AminoAcid[] }) {
	const properties = {
		padding: 40,
		chainLineWidth: 20,
		chainLineHeight: 15,
		carbonylLineLength: 20,
		lineStrokeWidth: 2,
		// fontSize: x
	};
	const styles = {
		svg: {
			backgroundColor: "#fff",
			height: 120,
			width:
				properties.padding * 2 + acids.length * properties.chainLineWidth * 3,
		},
		stroke: {
			fill: "none",
			stroke: "black",
			strokeWidth: properties.lineStrokeWidth,
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
				x += properties.chainLineWidth;
				y = y == 0 ? properties.chainLineHeight : 0;
				path += `L ${x} ${y} `;
				if (j == 3) {
					ns.push(
						<text x={x - 5} y={y == 0 ? y - 4 : y + 16}>
							N
						</text>
					);
				} else if (j == 2) {
					const f = y == 0 ? -1 : 1;
					carbonyls.push(
						<>
							<path
								style={styles.stroke}
								d={`M ${x - 2} ${y - 2 * f} L ${x - 2} ${
									y + properties.carbonylLineLength * f
								}`}
							/>
							<path
								style={styles.stroke}
								d={`M ${x + 2} ${y - 2 * f} L ${x + 2} ${
									y + properties.carbonylLineLength * f
								}`}
							/>
							<text x={x - 5} y={y == 0 ? y - 23 : y + 34}>
								O
							</text>
						</>
					);
				}
			}
		}
		ns.pop(); // get rid of the last one
		return (
			<g
				transform={`translate(${properties.padding} ${
					styles.svg.height / 2 - properties.chainLineHeight / 2
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
						styles.svg.width - properties.padding * 2
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
