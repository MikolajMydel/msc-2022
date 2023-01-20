import { AcidCount } from "../utils/analysis";
import { AminoAcid } from "../../../utils/staticvalues";
import { getAllFrames, getAllProteins } from "../utils/translation";
import { checkProtein } from "./testutils";

describe("integration tests (translation, transcription, analysis)", () => {
	test("full RNA to protein transcription, valid inputs", () => {
		/* Single protein */
		// AUG UUU CUA UAA
		const test1_acidCount: AcidCount = {
			Methionine: 1,
			Phenylalanine: 1,
			Leucine: 1,
		};
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
		expect(test1_Proteins[0].aminoAcidCounts).toStrictEqual(test1_acidCount);
		// test link generation
		expect(test1_Proteins[0].getLink()).toBe("#0f0");
		expect(test1_Proteins[0].getLink(false)).toBe("0f0");
		/* Two proteins with (same shift) */
		// AUG CUA UAA(short) AUG UUU CUA UAA(long)

		const test2_acidCount1: AcidCount = {
			Methionine: 1,
			Phenylalanine: 1,
			Leucine: 1,
		};

		const test2_acidCount2: AcidCount = {
			Methionine: 1,
			Leucine: 1,
		};
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
		expect(test2_Proteins[0].aminoAcidCounts).toStrictEqual(test2_acidCount1);

		expect(test2_Proteins[0].getLink()).toBe("#3f0");
		expect(test2_Proteins[0].getLink(false)).toBe("3f0");

		checkProtein(test2_Proteins[1], {
			correctAcids: [AminoAcid.Methionine, AminoAcid.Leucine],
			length: 2,
			codonIndex: 0,
			shift: 0,
		});
		expect(test2_Proteins[1].aminoAcidCounts).toStrictEqual(test2_acidCount2);
		expect(test2_Proteins[1].getLink()).toBe("#0f0");
		expect(test2_Proteins[1].getLink(false)).toBe("0f0");
		/* Two proteins with (different shift), sorting by length */
		// AUG CUA UAA(short) (A) AUG UUU CUA UAA(long)
		// frame 1: AUG CUA UAA(stop) AAU GUU UUU UCU AUA A
		// frame 2: UGC UAU AAA AUG UUU UUU CUA UAA(stop)

		const test3_acidCount1: AcidCount = {
			Methionine: 1,
			Phenylalanine: 2,
			Leucine: 1,
		};

		const test3_acidCount2: AcidCount = {
			Methionine: 1,
			Leucine: 1,
		};

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
		expect(test3_Proteins[0].aminoAcidCounts).toStrictEqual(test3_acidCount1);

		expect(test3_Proteins[0].getLink()).toBe("#3f1");
		expect(test3_Proteins[0].getLink(false)).toBe("3f1");

		checkProtein(test3_Proteins[1], {
			correctAcids: [AminoAcid.Methionine, AminoAcid.Leucine],
			length: 2,
			codonIndex: 0,
			shift: 0,
		});
		expect(test3_Proteins[1].aminoAcidCounts).toStrictEqual(test3_acidCount2);

		expect(test3_Proteins[1].getLink()).toBe("#0f0");
		expect(test3_Proteins[1].getLink(false)).toBe("0f0");
	});
});
