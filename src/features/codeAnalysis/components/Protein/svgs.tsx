import { AminoAcid } from "../../../../utils/staticvalues";
import { settings } from "./Formula";
export const carbonyl = (style: object, x: number, y: number) => {
	const f = y == 0 ? -1 : 1;
	return (
		<>
			<path
				style={style}
				d={`M ${x - 2} ${y - 2 * f} L ${x - 2} ${
					y + settings.carbonylLineLength * f
				}`}
			/>
			<path
				style={style}
				d={`M ${x + 2} ${y - 2 * f} L ${x + 2} ${
					y + settings.carbonylLineLength * f
				}`}
			/>
			<text x={x - 5} y={y == 0 ? y - 23 : y + 34}>
				O
			</text>
		</>
	);
};
export const aminoacids = (
	acid: AminoAcid,
	x: number,
	y: number,
	style: object
) => {
	switch (acid) {
		case AminoAcid.Phenylalanine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Leucine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Isoleucine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Methionine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Valine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Serine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Proline:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Threonine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Alanine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Tyrosine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Histidine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Glutamine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Aspargine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Lysine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.AsparticAcid:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.GlutamicAcid:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Cysteine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Tryptophan:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Arginine:
			return <path style={style} d={`M ${x} ${y}`} />;
		case AminoAcid.Glycine:
			return <path style={style} d={`M ${x} ${y}`} />;
	}
};
