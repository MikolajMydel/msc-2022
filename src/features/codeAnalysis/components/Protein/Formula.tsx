import { AminoAcid } from "../../../../utils/staticvalues";
import { carbonyl, aminoacid, nitrogen, h2n, oh } from "./svgs";
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
	padding: 20,
	chainLineWidth: 20,
	chainLineHeight: 15,
	carbonylLineLength: 30,
	lineStrokeWidth: 2,
	fontSize: 16,
	fontFamily: "Arial",
	backgroundColor: "#eee",
	color: "#111",
};
export function Formula({ acids }: { acids: AminoAcid[] }) {
	const svgStyle = {
		backgroundColor: settings.backgroundColor,
		height: 500,
		width:
			settings.fontSize * 3.6 +
			settings.padding * 2 +
			acids.length * settings.chainLineWidth * 3,
	};
	const styles = {
		fill: "none",
		stroke: settings.color,
		strokeWidth: settings.lineStrokeWidth,
		fontSize: settings.fontSize,
		fontFamily: settings.fontFamily,
	};
	const ns = []; // Nitrogen symbols
	const carbonyls = [];
	const rs = []; // R groups with the aminoacids

	let x = 0;
	let y = 0;
	let path = `M ${x} ${y}`;
	for (let i = 0; i < acids.length; i++) {
		for (let j = 1; j <= 3; j++) {
			x += settings.chainLineWidth;
			y = y == 0 ? settings.chainLineHeight : 0;
			path += `L ${x} ${y} `;
			switch (j) {
				case 1:
					rs.push(aminoacid(acids[i], x, y));
					break;
				case 2:
					carbonyls.push(carbonyl(x, y));
					break;
				case 3:
					ns.push(nitrogen(x, y));
					break;
			}
		}
	}
	ns.pop(); // get rid of the last one
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
			<defs>
				<filter x="-0.1" y="0" width="1.3" height="1" id="textbg">
					<feFlood floodColor={settings.backgroundColor} result="bg" />
					<feMerge>
						<feMergeNode in="bg" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<style>
				{`
                    text {
                        stroke-width: 1px;
                        fill: ${styles.stroke};
                    }
                `}
			</style>
			<g
				transform={`
                    translate(
                        ${settings.fontSize * 2 + settings.padding}
                        ${svgStyle.height / 2 - settings.chainLineHeight / 2}
                    )`}
				style={styles}
			>
				{h2n()}
				{oh(svgStyle.width, y)}
				( the path between )
				<path d={path} />
				{ns}
				{carbonyls}
				{rs}
			</g>
		</svg>
	);
}
