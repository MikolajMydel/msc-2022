import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
	preset: "ts-jest",
	/* exclude test utils */
	modulePathIgnorePatterns: ["testutils.ts"],
};

export default jestConfig;
