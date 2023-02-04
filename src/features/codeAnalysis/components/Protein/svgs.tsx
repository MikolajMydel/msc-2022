import { AminoAcid } from "../../../../utils/staticvalues";
import { settings } from "./Formula";
export const h2n = () => (
	<text x={`${-2 * settings.fontSize - 2}`} y={`${settings.fontSize / 4}`}>
		<tspan>H</tspan>
		<tspan dy="5">2</tspan>
		<tspan dy="-5">N</tspan>
	</text>
);
export const oh = (svgWidth: number, y: number) => (
	<text
		x={`2`}
		y={`${settings.fontSize * 0.25}`}
		transform={`
            translate(
                ${svgWidth - settings.padding * 2 - settings.fontSize * 3.6}
                ${y}
            )`}
	>
		<tspan>OH</tspan>
	</text>
);
export const carbonyl = (x: number, y: number) => {
	const f = (e: number) => (y == 0 ? -1 * e : 1 * e); // whether to draw up or down
	return (
		<>
			<path
				d={`M ${x - 1.5} ${y - f(1.5)} v ${f(settings.carbonylLineLength)}`}
			/>
			<path
				d={`M ${x + 1.5} ${y - f(1.5)} v ${f(settings.carbonylLineLength)}`}
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
export const nitrogen = (x: number, y: number) => (
	<>
		<text
			x={x - settings.fontSize * 0.3}
			y={y == 0 ? y - settings.fontSize * 0.25 : y + settings.fontSize}
		>
			N
		</text>
		<text
			x={x - settings.fontSize * 0.3}
			y={y == 0 ? y - settings.fontSize * 1.25 : y + 2 * settings.fontSize}
		>
			H
		</text>
	</>
);

type coordinates = { x: number; y: number };
export const aminoacid = (acid: AminoAcid, x: number, y: number) => {
	const fs = settings.fontSize;
	const c = settings.carbonylLineLength;
	const d = c / Math.sqrt(2); // for diagonal lines
	const f = (e: number) => (y == 0 ? -1 * e : 1 * e); // whether to draw up or down
	const t = y == 0 ? fs * 0.25 : fs; // for vertical text adjustment
	const anglePos = (l: number, a: number): coordinates => ({
		x: l * Math.cos(a * (Math.PI / 180)),
		y: l * Math.sin(a * (Math.PI / 180)),
	});
	const polygon = (
		n: number,
		ox: number,
		oy: number,
		a: number,
		v: number[]
	) => {
		const margin = 3;
		let path = "",
			inner = "";
		let angle = 0;
		for (let i = 0; i < n; i++) {
			path += `l ${anglePos(c, angle + a).x} ${f(anglePos(c, angle + a).y)} `;
			angle += 360 / n;
		}
		for (let i = 0; i < n; i++) {
			inner += `${v.includes(i) ? "l" : "m"} ${
				anglePos(c - margin * 2, angle + a).x
			} ${f(anglePos(c - margin * 2, angle + a).y)} `;
			angle += 360 / n;
		}
		const z = n <= 5 ? 1.4 : 1.6;
		const xx = anglePos(margin, a).x - anglePos(margin * z, a).y;
		const yy = f(anglePos(margin, a).y + anglePos(margin * z, a).x);
		return (
			<g>
				<path d={`M ${ox} ${oy} ${path}`} />
				<path d={`M ${ox + xx} ${oy + yy} ${inner}`} />
			</g>
		);
	};
	switch (acid) {
		case AminoAcid.Alanine:
			return (
				<>
					<path d={`M ${x} ${y} v ${f(c)}`} />;
				</>
			);
		case AminoAcid.Arginine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        m ${2 + fs * 0.4} ${f(fs + 3)}
                        v ${f(c)}
                        l ${-d} ${f(d)}
                        m ${d} ${-f(d)}
                        m ${-3 / Math.sqrt(2)} ${0}
                        l ${d} ${f(d)}
                        m ${-d + 3 / Math.sqrt(2)} ${-f(d + 3 / Math.sqrt(2))}
                        l ${d} ${f(d)}
                    `}
					/>
					;
					<text x={`${x + d + d + 2}`} y={`${y + f(c + c + d + d + t)}`}>
						NH
					</text>
					<text
						x={`${x + d + fs * 0.5 - 2 * fs}`}
						y={`${y + f(c + d + c + d + t + fs + 2 + c + d)}`}
					>
						<tspan>H</tspan>
						<tspan dy="5">2</tspan>
						<tspan dy="-5">N</tspan>
					</text>
					<text
						x={`${x + d + d + d + 2 + fs * 0.4}`}
						y={`${y + f(c + c + d + d + t + fs + c + d)}`}
					>
						NH
					</text>
				</>
			);
		case AminoAcid.Aspargine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                        m ${0} ${-f(c)}
                        m ${0} ${f(1.5)}
                        h ${c}
                        m ${-c - 1.5} ${-f(3)}
                        h ${c + 1.5}
                    `}
					/>
					<text x={`${x + d - fs * 0.3}`} y={`${y + f(c + d + c + t)}`}>
						NH
						<tspan dy="5">2</tspan>
					</text>
					<text x={`${x + d + c + 2}`} y={`${y + f(c + d) + fs * 0.4}`}>
						O
					</text>
				</>
			);
		case AminoAcid.AsparticAcid:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                        m ${0} ${-f(c)}
                        m ${0} ${f(1.5)}
                        h ${c}
                        m ${-c - 1.5} ${-f(3)}
                        h ${c + 1.5}
                    `}
					/>
					<text x={`${x + d - fs * 0.4}`} y={`${y + f(c + d + c + t)}`}>
						OH
					</text>
					<text x={`${x + d + c + 2}`} y={`${y + f(c + d) + fs * 0.4}`}>
						O
					</text>
				</>
			);
		case AminoAcid.Cysteine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                    `}
					/>
					;
					<text x={`${x + d + 2}`} y={`${y + f(c + d + t)}`}>
						SH
					</text>
				</>
			);
		case AminoAcid.GlutamicAcid:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                        l ${-d} ${f(d)}
                        m ${d} ${-f(d)}
                        m ${-3 / Math.sqrt(2)} ${0}
                        l ${d} ${f(d)}
                        m ${-d + 3 / Math.sqrt(2)} ${-f(d + 3 / Math.sqrt(2))}
                        l ${d} ${f(d)}
                    `}
					/>
					<text x={`${x - fs * 1.5}`} y={`${y + f(c + d + c + d + t - 3)}`}>
						HO
					</text>
					<text x={`${x + d + d + 2}`} y={`${y + f(c + d + c + d + t - 3)}`}>
						O
					</text>
				</>
			);
		case AminoAcid.Glutamine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                        l ${-d} ${f(d)}
                        m ${d} ${-f(d)}
                        m ${-3 / Math.sqrt(2)} ${0}
                        l ${d} ${f(d)}
                        m ${-d + 3 / Math.sqrt(2)} ${-f(d + 3 / Math.sqrt(2))}
                        l ${d} ${f(d)}
                    `}
					/>
					<text x={`${x - fs * 2}`} y={`${y + f(c + d + c + d + t - 3)}`}>
						<tspan>H</tspan>
						<tspan dy="5">2</tspan>
						<tspan dy="-5">N</tspan>
					</text>
					<text x={`${x + d + d + 2}`} y={`${y + f(c + d + c + d + t - 3)}`}>
						O
					</text>
				</>
			);
		case AminoAcid.Glycine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                    `}
					/>
				</>
			);
		case AminoAcid.Histidine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                    `}
					/>
					{polygon(5, x + d, f(y + c + d), 0, [0, 3])}
					<text
						x={`${x + d + anglePos(c, 108).x - fs * 0.3}`}
						y={`${y + f(c + d + anglePos(c, 108).y + t - fs * 0.7)}`}
						filter="url(#textbg)"
					>
						N
					</text>
					<text
						x={`${x + d + anglePos(c * 1.618, 36).x - fs * 0.3}`}
						y={`${y + f(c + d + anglePos(c * 1.618, 36).y + t - fs * 0.5)}`}
						filter="url(#textbg)"
					>
						NH
					</text>
				</>
			);
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
					<path
						d={`
                        M ${x} ${y}
                    `}
					/>
				</>
			);
	}
};
