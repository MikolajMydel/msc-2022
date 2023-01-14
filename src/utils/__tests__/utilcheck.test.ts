import { splitIntoCodons, splitIntoFullCodons } from "../codonOperations";
import { CODON_TABLE, AminoAcid } from "../staticvalues";

import {
	getSymbol,
	getShortName,
	aminoAcidArrayToSections,
} from "../stringoperations";
import { getAminoAcidCounts, AcidCount } from "../utils";

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

	test("check section detection single coding section", () => {
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
			startIndex: 0,
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
			startIndex: 0,
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
			startIndex: 0,
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
			startIndex: 0,
		});

		checkSection(sections4[1], {
			isProtein: true,
			string: "MTA-",
			startIndex: 1,
		});

		checkSection(sections4[2], {
			isProtein: false,
			string: "A-",
			startIndex: 5,
		});
	});

	test("check section detection, multiple coding sections", () => {
		expect(aminoAcidArrayToSections([])).toStrictEqual([]);
		// threonine - T
		// alanine - A
		/* only highlighted sections */
		const sections1 = aminoAcidArrayToSections([
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
		]);
		expect(sections1.length).toBe(2);
		checkSection(sections1[0], {
			isProtein: true,
			string: "MTA-",
			startIndex: 0,
		});
		checkSection(sections1[1], {
			isProtein: true,
			string: "MTA-",
			startIndex: 4,
		});

		/* section between coding sections */
		const sections2 = aminoAcidArrayToSections([
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
		]);
		expect(sections2.length).toBe(3);
		checkSection(sections2[0], {
			isProtein: true,
			string: "MTA-",
			startIndex: 0,
		});
		checkSection(sections2[1], {
			isProtein: false,
			string: "TA-",
			startIndex: 4,
		});
		checkSection(sections2[2], {
			isProtein: true,
			string: "MTA-",
			startIndex: 7,
		});

		/* sections before, after and between coding sections */
		const sections3 = aminoAcidArrayToSections([
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
		]);
		expect(sections3.length).toBe(5);
		checkSection(sections3[0], {
			isProtein: false,
			string: "TA-",
			startIndex: 0,
		});
		checkSection(sections3[1], {
			isProtein: true,
			string: "MTA-",
			startIndex: 3,
		});
		checkSection(sections3[2], {
			isProtein: false,
			string: "TA-",
			startIndex: 7,
		});
		checkSection(sections3[3], {
			isProtein: true,
			string: "MTA-",
			startIndex: 10,
		});
		checkSection(sections3[4], {
			isProtein: false,
			string: "TA-",
			startIndex: 14,
		});
	});

	test("check amino acid counting", () => {
		// empty array
		expect(getAminoAcidCounts([])).toStrictEqual({});

		const acids1 = [AminoAcid.Threonine];
		const acids1_count: AcidCount = {
			Threonine: 1,
		};
		expect(getAminoAcidCounts(acids1)).toStrictEqual(acids1_count);

		const acids2 = [
			AminoAcid.Threonine,
			AminoAcid.Threonine,
			AminoAcid.Threonine,
			AminoAcid.Threonine,
		];
		const acids2_count: AcidCount = {
			Threonine: 4,
		};
		expect(getAminoAcidCounts(acids2)).toStrictEqual(acids2_count);

		const acids3 = [
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Methionine,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
			AminoAcid.Threonine,
			AminoAcid.Alanine,
			AminoAcid.STOP,
		];
		const acids3_count: AcidCount = {
			Threonine: 5,
			Alanine: 5,
			STOP: 5,
			Methionine: 2,
		};
		expect(getAminoAcidCounts(acids3)).toStrictEqual(acids3_count);
	});
});
