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
	Cysteine = "Cysteine",
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

	UGU: AminoAcid.Cysteine,
	UGC: AminoAcid.Cysteine,

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

export const AMINO_ACID_NAMES: AminoAcidNames = {
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
	Cysteine: { Symbol: "C", Short: "Cys" },
	Tryptophan: { Symbol: "W", Short: "Trp" },
	Arginine: { Symbol: "R", Short: "Arg" },
	Glycine: { Symbol: "G", Short: "Gly" },
};

interface AcidProperties {
	Mass: number;
}

type AminoAcidProperties = {
	[key: string]: AcidProperties;
};

export const AMINO_ACID_PROPERTIES: AminoAcidProperties = {
	Phenylalanine: { Mass: 165.192 },
	Leucine: { Mass: 131.175 },
	Isoleucine: { Mass: 131.175 },
	Methionine: { Mass: 149.208 },
	Valine: { Mass: 117.148 },
	Serine: { Mass: 105.093 },
	Proline: { Mass: 115.132 },
	Threonine: { Mass: 119.119 },
	Alanine: { Mass: 89.094 },
	Tyrosine: { Mass: 181.191 },
	STOP: { Mass: 0 },
	Histidine: { Mass: 155.156 },
	Glutamine: { Mass: 146.146 },
	Aspargine: { Mass: 132.119 },
	Lysine: { Mass: 146.189 },
	AsparticAcid: { Mass: 133.104 },
	GlutamicAcid: { Mass: 147.131 },
	Cysteine: { Mass: 121.154 },
	Tryptophan: { Mass: 204.228 },
	Arginine: { Mass: 174.203 },
	Glycine: { Mass: 75.067 },
};
