import { AminoAcid, AMINO_ACID_PROPERTIES } from "./staticvalues";

export function getShortName(acid: AminoAcid): string {
	return AMINO_ACID_PROPERTIES[acid].Names.Short;
}

export function getSymbol(acid: AminoAcid): string {
	return AMINO_ACID_PROPERTIES[acid].Names.Symbol;
}

/* combine amino acid array into a string */
export function aminoAcidArrayToString(acids: AminoAcid[]): string {
	const symbols: string[] = [];
	acids.forEach((element) => {
		symbols.push(getSymbol(element));
	});

	return symbols.join("");
}

export interface Section {
	isProtein: boolean;
	string: string;
}

export function aminoAcidArrayToSections(acids: AminoAcid[]): Section[] {
	let symbols: string[] = [];

	// (is after Methionine)
	let isAfterMet = false;
	const sections: Section[] = [];

	const addSection = (isProtein: boolean) => {
		isAfterMet = !isProtein;
		/* don't add empty sections */
		if (symbols.length != 0) {
			sections.push({ string: symbols.join(""), isProtein: isProtein });
		}
		symbols = [];
	};

	acids.forEach((element) => {
		/* start of a new section */
		if (element == AminoAcid.Methionine && !isAfterMet) {
			addSection(false);
			symbols.push(getSymbol(element));
			return;
		}

		symbols.push(getSymbol(element));
		if (element == AminoAcid.STOP && isAfterMet) {
			addSection(true);
		}
	});

	addSection(false);

	return sections;
}
