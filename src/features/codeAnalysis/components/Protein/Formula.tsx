import { AminoAcid } from "../../../../utils/staticvalues";
import { carbonyl, aminoacid, nitrogen, h2n, oh } from "./svgs";
import { renderToStaticMarkup } from "react-dom/server";
import styles from "./proteins.module.scss";

export const settings = {
	padding: 20,
	height: 300,
	chainLineWidth: 25,
	chainLineHeight: 15,
	carbonylLineLength: 22,
	lineStrokeWidth: 2,
	polygonMargin: 2.5,
	fontSize: 10,
	fontFamily: "Arial",
	backgroundColor: "#eee",
	color: "#111",
};
export function FormulaImage({ acids }: { acids: AminoAcid[] }) {
	const string = renderToStaticMarkup(<Formula acids={acids} />);
	const src = URL.createObjectURL(
		new Blob([string], { type: "image/svg+xml" })
	);
	return (
		<div className={styles.Formula}>
			<img src={src} style={{ height: settings.height }} />
		</div>
	);
}
function Formula({ acids }: { acids: AminoAcid[] }) {
	const svgStyle = {
		backgroundColor: settings.backgroundColor,
		height: settings.height,
		width:
			settings.fontSize * 3.6 + // +/- all text width
			settings.padding * 2 + // padding on both sides
			acids.length * settings.chainLineWidth * 3, // each segment takes 3 of theese lengths
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
	// draw 3-piece segments
	for (let i = 0; i < acids.length; i++) {
		for (let j = 1; j <= 3; j++) {
			x += settings.chainLineWidth;
			y = y == 0 ? settings.chainLineHeight : 0;
			path += `L ${x} ${y} `;
			switch (
				j // each piece of the segment
			) {
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
	ns.pop(); // the last one overlaps with the ending OH
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={svgStyle}
			viewBox={`0 0 ${svgStyle.width} ${svgStyle.height}`}
		>
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
				<path d={path} />
				{ns}
				{carbonyls}
				{rs}
			</g>
		</svg>
	);
}
