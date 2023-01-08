import { splitIntoCodons, splitIntoFullCodons } from "../codonOperations";
import { CODON_TABLE, AminoAcid } from "../staticvalues";

import {
	getSymbol,
	getShortName,
	aminoAcidArrayToSections,
} from "../stringoperations";

import { checkSection } from "./testutils";

describe("utility functions", () => {
	test("check all possible codons", () => {
		const bases = ["A", "C", "G", "U"];

		bases.forEach((b1) => {
			bases.forEach((b2) => {
				bases.forEach((b3) => {
					const codon = b1 + b2 + b3;
					const translatedCodon = CODON_TABLE[codon];
					expect(translatedCodon).toBeTruthy();
					expect(getShortName(translatedCodon)).toBeTruthy();
					expect(getSymbol(translatedCodon)).toBeTruthy();
				});
			});
		});
	});

	test("check RNA splitting", () => {
		expect(splitIntoCodons("")).toStrictEqual([]);
		expect(splitIntoCodons("AA")).toStrictEqual(["AA"]);
		expect(splitIntoCodons("AAAA")).toStrictEqual(["AAA", "A"]);

		expect(splitIntoFullCodons("")).toStrictEqual([]);
		expect(splitIntoFullCodons("AA")).toStrictEqual([]);
		expect(splitIntoFullCodons("AAAA")).toStrictEqual(["AAA"]);
	});

	test("check section detection", () => {
		expect(aminoAcidArrayToSections([])).toStrictEqual([]);
		// threonine - T
		// alanine - A
		/* only highlighted section */
		const sections1 = aminoAcidArrayToSections([
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
		]);
		expect(sections1.length).toBe(1);
		checkSection(sections1[0], {
			isProtein: true,
			string: "MTA-",
		});

		/* start without stop */
		const sections2 = aminoAcidArrayToSections([
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
		]);
		expect(sections2.length).toBe(1);
		checkSection(sections2[0], {
			isProtein: false,
			string: "MTA",
		});
		/* stop without start */
		const sections3 = aminoAcidArrayToSections([
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
		]);
		expect(sections3.length).toBe(1);
		checkSection(sections3[0], {
			isProtein: false,
			string: "TA-",
		});
		/* sections between highlighted section */
		const sections4 = aminoAcidArrayToSections([
			AminoAcid.Alanine,
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Alanine,
			AminoAcid.STOP,
		]);
		expect(sections4.length).toBe(3);
		checkSection(sections4[0], {
			isProtein: false,
			string: "A",
		});

		checkSection(sections4[1], {
			isProtein: true,
			string: "MTA-",
		});

		checkSection(sections4[2], {
			isProtein: false,
			string: "A-",
		});
	});
});
