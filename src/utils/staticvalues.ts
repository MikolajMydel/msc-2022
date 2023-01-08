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

	AUU: AminoAcid.Isoleucine,
	AUC: AminoAcid.Isoleucine,

	AUG: AminoAcid.Methionine /* START */,

	GUU: AminoAcid.Valine,
	GUA: AminoAcid.Valine,
	GUG: AminoAcid.Valine,

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
