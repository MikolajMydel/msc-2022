import { aminoAcidArrayToString } from "../../../utils/stringoperations";
import { AminoAcid } from "../../../utils/staticvalues";
import { getAllFrames, getAllProteins } from "../utils/translation";
import { checkProtein } from "./testutils";

describe("transcription", () => {
	test("convert amino acid array to string", () => {
		/* empty string */
		expect(aminoAcidArrayToString([])).toBe("");

		const test1_AminoAcids = [
			AminoAcid.Alanine,
			AminoAcid.Cysteine,
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
});
