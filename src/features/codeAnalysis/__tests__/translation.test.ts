import { aminoAcidArrayToString } from "../../../utils/staticvalues";
import { AminoAcid } from "../../../utils/staticvalues";
import { getAllFrames, getAllProteins } from "../utils/translation";
import { checkProtein } from "./testutils";

import {
	CODON_TABLE,
	getShortName,
	getSymbol,
} from "../../../utils/staticvalues";

describe("transcription", () => {
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

	test("convert amino acid array to string", () => {
		/* empty string */
		expect(aminoAcidArrayToString([])).toBe("");

		const test1_AminoAcids = [
			AminoAcid.Alanine,
			AminoAcid.Cysterine,
			AminoAcid.STOP,
		];
		expect(aminoAcidArrayToString(test1_AminoAcids)).toBe("AC-");

		const test2_AminoAcids = [AminoAcid.STOP, AminoAcid.STOP, AminoAcid.STOP];
		expect(aminoAcidArrayToString(test2_AminoAcids)).toBe("---");

		const test3_AminoAcids = [
			AminoAcid.Methionine,
			AminoAcid.AsparticAcid,
			AminoAcid.STOP,
		];
		expect(aminoAcidArrayToString(test3_AminoAcids)).toBe("MD-");
	});

	test("generating different reading frames", () => {
		expect(getAllFrames("")).toStrictEqual([[], [], []]);

		expect(getAllFrames("CUU")).toStrictEqual([[AminoAcid.Leucine], [], []]);

		expect(getAllFrames("UACG")).toStrictEqual([
			[AminoAcid.Tyrosine],
			[AminoAcid.Threonine],
			[],
		]);

		expect(getAllFrames("AGCUA")).toStrictEqual([
			[AminoAcid.Serine],
			[AminoAcid.Alanine],
			[AminoAcid.Leucine],
		]);

		expect(getAllFrames("AGCUAAAGU")).toStrictEqual([
			[AminoAcid.Serine, AminoAcid.STOP, AminoAcid.Serine], // AGC UAA AGU
			[AminoAcid.Alanine, AminoAcid.Lysine], //GCU AAA GU
			[AminoAcid.Leucine, AminoAcid.Lysine], // CUA AAG U
		]);
	});

	test("generate proteins, invalid inputs", () => {
		// ====== TEST 1 ====== //
		/* empty inputs */
		expect(getAllProteins([])).toStrictEqual([]);
		expect(getAllProteins([[], [], []])).toStrictEqual([]);

		// ====== TEST 2 ====== //
		/* invalid inputs */
		const test2_AminoAcids1 = [
			AminoAcid.Methionine,
			AminoAcid.Tyrosine,
			AminoAcid.Threonine,
		];
		const test2_AminoAcids2 = [
			AminoAcid.Tyrosine,
			AminoAcid.Threonine,
			AminoAcid.STOP,
		];
		/* without a stop */
		expect(getAllProteins([test2_AminoAcids1])).toStrictEqual([]);
		expect(getAllProteins([test2_AminoAcids2])).toStrictEqual([]);
	});
	test("generate proteins, valid inputs", () => {
		// ====== TEST 1 ====== //
		/* correct aminoacid */
		const test1_AminoAcids = [
			AminoAcid.Methionine,
			AminoAcid.Tyrosine,
			AminoAcid.Threonine,
			AminoAcid.STOP,
		];

		/* check returned array's length */
		const test1_ReturnProteins = getAllProteins([test1_AminoAcids]);
		expect(test1_ReturnProteins.length).toBe(1);
		/* check acids and length getter */
		checkProtein(test1_ReturnProteins[0], {
			correctAcids: [
				AminoAcid.Methionine,
				AminoAcid.Tyrosine,
				AminoAcid.Threonine,
			],
			length: 3,
			codonIndex: 0,
			shift: 0,
		});

		// ====== TEST 2 ====== //
		/* check sorting, frames (shift) and codonIndex */
		const test2_AminoAcids = [
			[
				AminoAcid.Tyrosine,
				AminoAcid.Methionine,
				AminoAcid.Methionine,
				AminoAcid.Tyrosine,
				AminoAcid.Threonine,
				AminoAcid.STOP,
			],
			[
				AminoAcid.Tyrosine,
				AminoAcid.Methionine,
				AminoAcid.Tyrosine,
				AminoAcid.Threonine,
				AminoAcid.Threonine,
				AminoAcid.Threonine,
				AminoAcid.STOP,
			],
			[
				AminoAcid.Methionine,
				AminoAcid.Methionine,
				AminoAcid.STOP,
				AminoAcid.STOP,
			],
		];

		/* check returned array's length */
		const test2_ReturnProteins = getAllProteins(test2_AminoAcids);
		expect(test2_ReturnProteins.length).toBe(3);

		/* check first protein */
		checkProtein(test2_ReturnProteins[0], {
			correctAcids: [
				AminoAcid.Methionine,
				AminoAcid.Tyrosine,
				AminoAcid.Threonine,
				AminoAcid.Threonine,
				AminoAcid.Threonine,
			],
			length: 5,
			codonIndex: 1,
			shift: 1,
		});

		/* check 2nd protein */
		checkProtein(test2_ReturnProteins[1], {
			correctAcids: [
				AminoAcid.Methionine,
				AminoAcid.Methionine,
				AminoAcid.Tyrosine,
				AminoAcid.Threonine,
			],
			length: 4,
			codonIndex: 1,
			shift: 0,
		});
		/* check 3rd protein */
		checkProtein(test2_ReturnProteins[2], {
			correctAcids: [AminoAcid.Methionine, AminoAcid.Methionine],
			length: 2,
			codonIndex: 0,
			shift: 2,
		});
	});

	test("full RNA to protein transcription, invalid inputs", () => {
		/* Check empty inputs */
		expect(getAllProteins(getAllFrames(""))).toStrictEqual([]);
		/* Check invalid inputs */
		// Start without a stop
		expect(getAllProteins(getAllFrames("AUGUUU"))).toStrictEqual([]);
		// Withour start
		expect(getAllProteins(getAllFrames("CUAUAA"))).toStrictEqual([]);
	});

	test("full RNA to protein transcription, valid inputs", () => {
		/* Single protein */
		// AUG UUU CUA UAA
		const test1_Proteins = getAllProteins(getAllFrames("AUGUUUCUAUAA"));
		expect(test1_Proteins.length).toBe(1);
		checkProtein(test1_Proteins[0], {
			correctAcids: [
				AminoAcid.Methionine,
				AminoAcid.Phenylalanine,
				AminoAcid.Leucine,
			],
			length: 3,
			codonIndex: 0,
			shift: 0,
		});

		/* Two proteins with (same shift) */
		// AUG CUA UAA(short) AUG UUU CUA UAA(long)
		const test2_Proteins = getAllProteins(
			getAllFrames("AUGCUAUAAAUGUUUCUAUAA")
		);
		expect(test2_Proteins.length).toBe(2);
		checkProtein(test2_Proteins[0], {
			correctAcids: [
				AminoAcid.Methionine,
				AminoAcid.Phenylalanine,
				AminoAcid.Leucine,
			],
			length: 3,
			codonIndex: 3,
			shift: 0,
		});
		checkProtein(test2_Proteins[1], {
			correctAcids: [AminoAcid.Methionine, AminoAcid.Leucine],
			length: 2,
			codonIndex: 0,
			shift: 0,
		});

		/* Two proteins with (different shift), sorting by length */
		// AUG CUA UAA(short) (A) AUG UUU CUA UAA(long)
		// frame 1: AUG CUA UAA(stop) AAU GUU UUU UCU AUA A
		// frame 2: UGC UAU AAA AUG UUU UUU CUA UAA(stop)
		const test3_Proteins = getAllProteins(
			getAllFrames("AUGCUAUAAAAUGUUUUUUCUAUAA")
		);
		expect(test3_Proteins.length).toBe(2);
		checkProtein(test3_Proteins[0], {
			correctAcids: [
				AminoAcid.Methionine,
				AminoAcid.Phenylalanine,
				AminoAcid.Phenylalanine,
				AminoAcid.Leucine,
			],
			length: 4,
			codonIndex: 3,
			shift: 1,
		});
		checkProtein(test3_Proteins[1], {
			correctAcids: [AminoAcid.Methionine, AminoAcid.Leucine],
			length: 2,
			codonIndex: 0,
			shift: 0,
		});
	});
});
