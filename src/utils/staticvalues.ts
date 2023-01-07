export enum AminoAcid {
	Phenylalanine = "Phenylalanine",
	Leucine = "Leucine",
	Isoleucine = "Isoleucine",
	Methionine = "Methionine" /* START codon */,
	Valine = "Valine",
	Serine = "Serine",
	Proline = "Proline",
	Threonine = "Threonine",
	Alanine = "Alanine",
	Tyrosine = "Tyrosine",
	STOP = "STOP",
	Histidine = "Histidine",
	Glutamine = "Glutamine",
	Aspargine = "Aspargine",
	Lysine = "Lysine",
	AsparticAcid = "AsparticAcid",
	GlutamicAcid = "GlutamicAcid",
	Cysterine = "Cysterine",
	Tryptophan = "Tryptophan",
	Arginine = "Arginine",
	Glycine = "Glycine",
}

type CodonTable = {
	[key: string]: AminoAcid;
};

export const CODON_TABLE: CodonTable = {
	UUU: AminoAcid.Phenylalanine,
	UUC: AminoAcid.Phenylalanine,

	UUA: AminoAcid.Leucine,
	UUG: AminoAcid.Leucine,
	CUU: AminoAcid.Leucine,
	CUC: AminoAcid.Leucine,
	CUA: AminoAcid.Leucine,
	CUG: AminoAcid.Leucine,

	AUA: AminoAcid.Isoleucine,
	AUU: AminoAcid.Isoleucine,
	AUC: AminoAcid.Isoleucine,

	AUG: AminoAcid.Methionine /* START */,

	GUU: AminoAcid.Valine,
	GUA: AminoAcid.Valine,
	GUG: AminoAcid.Valine,
	GUC: AminoAcid.Valine,

	UCU: AminoAcid.Serine,
	UCC: AminoAcid.Serine,
	UCA: AminoAcid.Serine,
	UCG: AminoAcid.Serine,

	CCU: AminoAcid.Proline,
	CCC: AminoAcid.Proline,
	CCA: AminoAcid.Proline,
	CCG: AminoAcid.Proline,

	ACU: AminoAcid.Threonine,
	ACC: AminoAcid.Threonine,
	ACA: AminoAcid.Threonine,
	ACG: AminoAcid.Threonine,

	GCU: AminoAcid.Alanine,
	GCC: AminoAcid.Alanine,
	GCA: AminoAcid.Alanine,
	GCG: AminoAcid.Alanine,

	UAU: AminoAcid.Tyrosine,
	UAC: AminoAcid.Tyrosine,

	UAA: AminoAcid.STOP,
	UAG: AminoAcid.STOP,

	CAU: AminoAcid.Histidine,
	CAC: AminoAcid.Histidine,

	CAA: AminoAcid.Glutamine,
	CAG: AminoAcid.Glutamine,

	AAU: AminoAcid.Aspargine,
	AAC: AminoAcid.Aspargine,

	AAA: AminoAcid.Lysine,
	AAG: AminoAcid.Lysine,

	GAU: AminoAcid.AsparticAcid,
	GAC: AminoAcid.AsparticAcid,

	GAA: AminoAcid.GlutamicAcid,
	GAG: AminoAcid.GlutamicAcid,

	UGU: AminoAcid.Cysterine,
	UGC: AminoAcid.Cysterine,

	UGA: AminoAcid.STOP,
	UGG: AminoAcid.Tryptophan,

	CGU: AminoAcid.Arginine,
	CGC: AminoAcid.Arginine,
	CGA: AminoAcid.Arginine,
	CGG: AminoAcid.Arginine,

	AGU: AminoAcid.Serine,
	AGC: AminoAcid.Serine,

	AGA: AminoAcid.Arginine,
	AGG: AminoAcid.Arginine,

	GGU: AminoAcid.Glycine,
	GGC: AminoAcid.Glycine,
	GGA: AminoAcid.Glycine,
	GGG: AminoAcid.Glycine,
};

interface AcidNames {
	/* 1-letter */
	Symbol: string;
	/* 3-letters */
	Short: string;
}

type AminoAcidNames = {
	[key: string]: AcidNames;
};

const AMINO_ACID_NAMES: AminoAcidNames = {
	Phenylalanine: { Symbol: "F", Short: "Phe" },
	Leucine: { Symbol: "L", Short: "Leu" },
	Isoleucine: { Symbol: "I", Short: "Ile" },
	Methionine: { Symbol: "M", Short: "Met" },
	Valine: { Symbol: "V", Short: "Val" },
	Serine: { Symbol: "S", Short: "Ser" },
	Proline: { Symbol: "P", Short: "Pro" },
	Threonine: { Symbol: "T", Short: "Thr" },
	Alanine: { Symbol: "A", Short: "Ala" },
	Tyrosine: { Symbol: "Y", Short: "Tyr" },
	STOP: { Symbol: "-", Short: "(STOP)" },
	Histidine: { Symbol: "H", Short: "His" },
	Glutamine: { Symbol: "Q", Short: "Gln" },
	Aspargine: { Symbol: "N", Short: "Asn" },
	Lysine: { Symbol: "K", Short: "Lys" },
	AsparticAcid: { Symbol: "D", Short: "Asp" },
	GlutamicAcid: { Symbol: "E", Short: "Glu" },
	Cysterine: { Symbol: "C", Short: "Cys" },
	Tryptophan: { Symbol: "W", Short: "Trp" },
	Arginine: { Symbol: "R", Short: "Arg" },
	Glycine: { Symbol: "G", Short: "Gly" },
};

export function getShortName(acid: AminoAcid): string {
	return AMINO_ACID_NAMES[acid].Short;
}

export function getSymbol(acid: AminoAcid): string {
	return AMINO_ACID_NAMES[acid].Symbol;
}

/* combine amino acid array into a string */
export function aminoAcidArrayToString(acids: AminoAcid[]): string {
	const symbols: string[] = [];
	acids.forEach((element) => {
		symbols.push(getSymbol(element));
	});

	return symbols.join("");
}
