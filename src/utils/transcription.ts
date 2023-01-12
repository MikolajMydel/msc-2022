export function convertDNAToRNA(source: string) {
	return source.replaceAll(/T/gi, "U");
}

export function convertRNAToDNA(source: string) {
	return source.replaceAll(/U/gi, "T");
}
