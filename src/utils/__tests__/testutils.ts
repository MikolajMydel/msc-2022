import { Section } from "../stringoperations";

interface SectionData {
	isProtein: boolean;
	string: string;
}

/* utility function */
export function checkSection(section: Section, data: SectionData): void {
	expect(section.isProtein).toBe(data.isProtein);
	expect(section.string).toBe(data.string);
}
