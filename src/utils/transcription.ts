export function convertDnaToRna(source: string) {
	return source.replaceAll(/T/gi, "U");
}

export function convertRnaToDna(source: string) {
	return source.replaceAll(/U/gi, "T");
}
