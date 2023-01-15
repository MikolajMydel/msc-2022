// https://gist.github.com/djD-REK/068cba3d430cf7abfddfd32a5d7903c3
export function roundFloat(number: number, digits: number): number {
	return Number(Math.round(Number(number + "e" + digits)) + "e-" + digits);
}

function getLink(codonIndex: number, frame: number): string {
	return String(codonIndex) + "f" + String(frame);
}

export function getProteinLink(codonIndex: number, frame: number, link = true) {
	if (link) {
		return "#" + getLink(codonIndex, frame);
	}
	return getLink(codonIndex, frame);
}
