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
		const m = settings.polygonMargin;
		let path = "",
			inner = "";
		let angle = 0;
		for (let i = 0; i < n; i++) {
			path += `l ${anglePos(c, angle + a).x} ${f(anglePos(c, angle + a).y)} `;
			angle += 360 / n;
		}
		for (let i = 0; i < n; i++) {
			inner += `${v.includes(i) ? "l" : "m"} ${
				anglePos(c - m * 2, angle + a).x
			} ${f(anglePos(c - m * 2, angle + a).y)} `;
			angle += 360 / n;
		}
		const z = n <= 5 ? 1.4 : 1.6;
		const xx = anglePos(m, a).x - anglePos(m * z, a).y;
		const yy = f(anglePos(m, a).y + anglePos(m * z, a).x);
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
					<text x={`${x - fs * 1.5 - 2}`} y={`${y + f(c + d + c + d + t)}`}>
						HO
					</text>
					<text x={`${x + d + d + 2}`} y={`${y + f(c + d + c + d + t)}`}>
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
					<text x={`${x - fs * 2 - 2}`} y={`${y + f(c + d + c + d + t)}`}>
						<tspan>H</tspan>
						<tspan dy="5">2</tspan>
						<tspan dy="-5">N</tspan>
					</text>
					<text x={`${x + d + d + 2}`} y={`${y + f(c + d + c + d + t)}`}>
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
		case AminoAcid.Isoleucine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${-d} ${f(d)}
                        m ${d} ${-f(d)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                    `}
					/>
					<text x={`${x - d - fs * 2}`} y={`${y + f(c + d + t)}`}>
						<tspan>H</tspan>
						<tspan dy="5">3</tspan>
						<tspan dy="-5">C</tspan>
					</text>
					<text x={`${x + d - fs * 0.3}`} y={`${y + f(c + d + c + t)}`}>
						CH
						<tspan dy="5">3</tspan>
					</text>
				</>
			);
		case AminoAcid.Leucine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                        m ${0} ${-f(c)}
                        h ${c}
                    `}
					/>
					<text x={`${x + d + c + 3}`} y={`${y + f(c + d + t - fs * 0.6)}`}>
						CH
						<tspan dy="5">3</tspan>
					</text>
					<text x={`${x + d - fs * 0.3}`} y={`${y + f(c + d + c + t)}`}>
						CH
						<tspan dy="5">3</tspan>
					</text>
				</>
			);
		case AminoAcid.Lysine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        v ${f(c)}
                    `}
					/>
					<text
						x={`${x + d + d - fs * 0.33}`}
						y={`${y + f(c + d + c + d + c + t)}`}
					>
						NH
						<tspan dy="5">2</tspan>
					</text>
				</>
			);
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
		case AminoAcid.Phenylalanine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                    `}
					/>
					{polygon(6, x + d, f(y + c + d), -15, [1, 3, 5])}
				</>
			);
		case AminoAcid.Proline:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c * 0.7)}
                        l ${-d * 0.7} ${f(d * 0.7)}
                        l ${-d * 0.7} ${-f(d * 0.7)}
                        L ${x - settings.chainLineWidth} ${
							y - f(settings.chainLineHeight)
						}
                    `}
					/>
				</>
			);
		case AminoAcid.Serine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                    `}
					/>
					<text x={`${x + d + 3}`} y={`${y + f(c + d + t - 3)}`}>
						OH
					</text>
				</>
			);
		case AminoAcid.Threonine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        m ${-d} ${-f(d)}
                        l ${-d} ${f(d)}
                    `}
					/>
					<text x={`${x + d + 3}`} y={`${y + f(c + d + t - 3)}`}>
						OH
					</text>
					<text x={`${x - d - fs * 2}`} y={`${y + f(c + d + t)}`}>
						H<tspan dy="5">3</tspan>
						<tspan dy="-5">C</tspan>
					</text>
				</>
			);
		case AminoAcid.Tryptophan:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                    `}
					/>
					{polygon(5, x + d, f(y + c + d), 0, [0])}
					<text
						x={`${x + d + anglePos(c * 1.618, 36).x - fs * 0.3}`}
						y={`${y + f(c + d + anglePos(c * 1.618, 36).y + t - fs * 0.5)}`}
						filter="url(#textbg)"
					>
						NH
					</text>
					{polygon(
						6,
						x + d + anglePos(c, 108).x,
						y + f(c + d + anglePos(c, 108).y),
						36,
						[0, 2, 4]
					)}
				</>
			);
		case AminoAcid.Tyrosine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${d} ${f(d)}
                        m ${2 * d} ${f(2 * d)}
                        l ${d} ${f(d)}
                    `}
					/>
					{polygon(6, x + d, f(y + c + d), -15, [1, 3, 5])}
					<text
						x={`${x + d + d + d + d + 3}`}
						y={`${y + f(c + d + d + d + d + t - fs * 0.5)}`}
					>
						OH
					</text>
				</>
			);
		case AminoAcid.Valine:
			return (
				<>
					<path
						d={`
                        M ${x} ${y}
                        v ${f(c)}
                        l ${-d} ${f(d)}
                        m ${d} ${-f(d)}
                        l ${d} ${f(d)}
                    `}
					/>
					<text x={`${x - d - fs * 2}`} y={`${y + f(c + d + t)}`}>
						<tspan>H</tspan>
						<tspan dy="5">3</tspan>
						<tspan dy="-5">C</tspan>
					</text>
					<text x={`${x + d + 3}`} y={`${y + f(c + d + t)}`}>
						CH
						<tspan dy="5">3</tspan>
					</text>
				</>
			);
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
