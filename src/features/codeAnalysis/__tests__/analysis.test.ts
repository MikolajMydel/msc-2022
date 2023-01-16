import { AcidCount, getAminoAcidCounts } from "../utils/analysis";
import { AminoAcid } from "../../../utils/staticvalues";

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
