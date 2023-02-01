import { AminoAcid } from "../../../../utils/staticvalues";
import { settings } from "./Formula";
export const h2n = () => (
	<text
		x={`${-2 * settings.fontSize - 2}`}
		y={`${settings.fontSize / 4}`}
		style={{ paintOrder: "fill" }}
	>
		<tspan>H</tspan>
		<tspan dy="5">2</tspan>
		<tspan dy="-5">N</tspan>
	</text>
);
export const oh = (svgWidth: number, y: number) => (
	<text
		x={`2`}
		y={`${settings.fontSize / 4}`}
		transform={`translate(${svgWidth - settings.padding * 2} ${y})`}
	>
		<tspan>OH</tspan>
	</text>
);
export const carbonyl = (x: number, y: number) => {
	const f = (e: number) => (y == 0 ? -1 * e : 1 * e); // whether to draw up or down
	return (
		<>
			<path d={`M ${x - 2} ${y - f(2)} v ${f(settings.carbonylLineLength)}`} />
			<path d={`M ${x + 2} ${y - f(2)} v ${f(settings.carbonylLineLength)}`} />
			<text
				x={x - settings.fontSize / 2.5}
				y={
					y == 0
						? y - settings.carbonylLineLength - settings.fontSize * 0.25
						: y + settings.carbonylLineLength + settings.fontSize
				}
			>
				O
			</text>
		</>
	);
};
export const nitrogen = (x: number, y: number) => (
	<text
		x={x - settings.fontSize * 0.3}
		y={y == 0 ? y - settings.fontSize * 0.25 : y + settings.fontSize}
	>
		N
	</text>
);

export const aminoacids = (acid: AminoAcid, x: number, y: number) => {
	const fs = settings.fontSize;
	const c = settings.carbonylLineLength;
	const d = c / Math.sqrt(2); // for diagonal lines
	const f = (e: number) => (y == 0 ? -1 * e : 1 * e); // whether to draw up or down
	const t = y == 0 ? fs * 0.25 : fs; // for vertical text adjustment
	switch (acid) {
		case AminoAcid.Alanine:
			return (
				<>
					<path d={`M ${x} ${y} v ${f(c)}`} />;
				</>
			);
		//case AminoAcid.Arginine:
		//case AminoAcid.Aspargine:
		//case AminoAcid.AsparticAcid:
		//case AminoAcid.Cysteine:
		//case AminoAcid.GlutamicAcid:
		//case AminoAcid.Glutamine:
		//case AminoAcid.Glycine:
		//case AminoAcid.Histidine:
		//case AminoAcid.Isoleucine:
		//case AminoAcid.Leucine:
		//case AminoAcid.Lysine:
		case AminoAcid.Methionine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                        m ${fs * 0.33} ${f(fs + 2)}
                        l ${d} ${f(d)}
                    `}
					/>
					;
					<text x={`${x + d - fs * 0.33}`} y={`${y + f(c + c + d + t)}`}>
						S
					</text>
				</>
			);
		//case AminoAcid.Phenylalanine:
		//case AminoAcid.Proline:
		//case AminoAcid.Serine:
		//case AminoAcid.Threonine:
		//case AminoAcid.Tryptophan:
		//case AminoAcid.Tyrosine:
		//case AminoAcid.Valine:
		default:
			return (
				<>
					<path d={`M ${x} ${y}`} />;
				</>
			);
	}
};
