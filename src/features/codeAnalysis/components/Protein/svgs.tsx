import { AminoAcid } from "../../../../utils/staticvalues";
import { settings } from "./Formula";
export const carbonyl = (x: number, y: number) => {
	const f = y == 0 ? -1 : 1;
	return (
		<>
			<path
				d={`M ${x - 2} ${y - 2 * f} L ${x - 2} ${
					y + settings.carbonylLineLength * f
				}`}
			/>
			<path
				d={`M ${x + 2} ${y - 2 * f} L ${x + 2} ${
					y + settings.carbonylLineLength * f
				}`}
			/>
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
export const aminoacids = (acid: AminoAcid, x: number, y: number) => {
	const f = y == 0 ? -1 : 1; // whether to draw up or down
	switch (acid) {
		case AminoAcid.Phenylalanine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Leucine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Isoleucine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Methionine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Valine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Serine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Proline:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Threonine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Alanine:
			return <path d={`M ${x} ${y} L ${x} ${y + f * 20}`} />;
		case AminoAcid.Tyrosine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Histidine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Glutamine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Aspargine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Lysine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.AsparticAcid:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.GlutamicAcid:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Cysteine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Tryptophan:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Arginine:
			return <path d={`M ${x} ${y}`} />;
		case AminoAcid.Glycine:
			return <path d={`M ${x} ${y}`} />;
	}
};
