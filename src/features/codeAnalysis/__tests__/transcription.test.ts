import { getRNA } from "../utils/transcription";

describe("transcription", () => {
	test("detect invalid input", () => {
		expect(getRNA(undefined)).toBe("");
		expect(getRNA("asjkfbsakd123")).toBe("");
		expect(getRNA("ATTUGGCC")).toBe("");
	});

	test("DNA to mRNA transcription", () => {
		expect(getRNA("AGGGCCCTTT")).toBe("AGGGCCCUUU");
		expect(getRNA("T")).toBe("U");
		expect(getRNA("ATTGGCC")).toBe("AUUGGCC");
	});

	test("don't change the output when input is RNA", () => {
		expect(getRNA("AGGGCCCUUU")).toBe("AGGGCCCUUU");
		expect(getRNA("UUU")).toBe("UUU");
		expect(getRNA("AUUUGGCC")).toBe("AUUUGGCC");
	});
});
