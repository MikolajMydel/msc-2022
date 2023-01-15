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

type DipeptideInstabilityValue = {
	[key: string]: number;
};

interface AcidNames {
	/* 1-letter */
	Symbol: string;
	/* 3-letters */
	Short: string;
}

export interface Atoms {
	Hydrogen: number;
	Carbon: number;
	Oxygen: number;
	Nitrogen: number;
	Sulphur: number;
}

interface AcidProps {
	Mass: number;
	Atoms: Atoms;
	Hydropathicity: number;
	DipeptideInstability: DipeptideInstabilityValue;
}

interface AcidValues {
	Names: AcidNames;
	Props: AcidProps;
}

type AcidProperties = {
	[key: string]: AcidValues;
};

// source: https://proteomicsresource.washington.edu/protocols06/masses.php
export const AMINO_ACID_PROPERTIES: AcidProperties = {
	Phenylalanine: {
		Names: { Symbol: "F", Short: "Phe" },
		Props: {
			Mass: 147.17386,
			Atoms: {
				Hydrogen: 9,
				Carbon: 9,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: 2.8,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: 20.26, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 33.6, // Y
				Histidine: 1.0, // H
				Glutamine: 1.0, // Q
				Aspargine: 1.0, // N
				Lysine: -14.03, // K
				AsparticAcid: 13.34, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 1.0, // W
				Arginine: 1.0, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Leucine: {
		Names: { Symbol: "L", Short: "Leu" },
		Props: {
			Mass: 113.15764,
			Atoms: {
				Hydrogen: 11,
				Carbon: 6,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: 3.8,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: 20.26, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 1.0, // H
				Glutamine: 33.6, // Q
				Aspargine: 1.0, // N
				Lysine: -7.49, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 24.68, // W
				Arginine: 20.26, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Isoleucine: {
		Names: { Symbol: "I", Short: "Ile" },
		Props: {
			Mass: 113.15764,
			Atoms: {
				Hydrogen: 11,
				Carbon: 6,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: 4.5,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 20.26, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: -7.49, // V
				Serine: 1.0, // S
				Proline: -1.88, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 13.34, // H
				Glutamine: 1.0, // Q
				Aspargine: 1.0, // N
				Lysine: -7.49, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 44.94, // E
				Cysteine: 1.0, // C
				Tryptophan: 1.0, // W
				Arginine: 1.0, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Methionine: {
		Names: { Symbol: "M", Short: "Met" },
		Props: {
			Mass: 131.19606,
			Atoms: {
				Hydrogen: 9,
				Carbon: 5,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 1,
			},
			Hydropathicity: 1.9,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: -1.88, // M
				Valine: 1.0, // V
				Serine: 44.94, // S
				Proline: 44.94, // P
				Threonine: -1.88, // T
				Alanine: 13.34, // A
				Tyrosine: 24.68, // Y
				Histidine: 58.28, // H
				Glutamine: -6.54, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 1.0, // W
				Arginine: -6.54, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Valine: {
		Names: { Symbol: "V", Short: "Val" },
		Props: {
			Mass: 99.13106,
			Atoms: {
				Hydrogen: 9,
				Carbon: 5,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: 4.2,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: 20.26, // P
				Threonine: -7.49, // T
				Alanine: 1.0, // A
				Tyrosine: -6.54, // Y
				Histidine: 1.0, // H
				Glutamine: 1.0, // Q
				Aspargine: 1.0, // N
				Lysine: -1.88, // K
				AsparticAcid: -14.03, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 1.0, // W
				Arginine: 1.0, // R
				Glycine: -7.49, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Serine: {
		Names: { Symbol: "S", Short: "Ser" },
		Props: {
			Mass: 87.0773,
			Atoms: {
				Hydrogen: 5,
				Carbon: 3,
				Oxygen: 2,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: -0.8,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 20.26, // S
				Proline: 44.94, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 1.0, // H
				Glutamine: 20.26, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 20.26, // E
				Cysteine: 33.6, // C
				Tryptophan: 1.0, // W
				Arginine: 20.26, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Proline: {
		Names: { Symbol: "P", Short: "Pro" },
		Props: {
			Mass: 97.11518,
			Atoms: {
				Hydrogen: 7,
				Carbon: 5,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: -1.6,
			DipeptideInstability: {
				Phenylalanine: 20.26, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: -6.54, // M
				Valine: 20.26, // V
				Serine: 20.26, // S
				Proline: 20.26, // P
				Threonine: 1.0, // T
				Alanine: 20.26, // A
				Tyrosine: 1.0, // Y
				Histidine: 1.0, // H
				Glutamine: 20.26, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: -6.54, // D
				GlutamicAcid: 18.38, // E
				Cysteine: -6.54, // C
				Tryptophan: -1.88, // W
				Arginine: -6.54, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Threonine: {
		Names: { Symbol: "T", Short: "Thr" },
		Props: {
			Mass: 101.10388,
			Atoms: {
				Hydrogen: 7,
				Carbon: 4,
				Oxygen: 2,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: -0.7,
			DipeptideInstability: {
				Phenylalanine: 13.34, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: 1.0, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 1.0, // H
				Glutamine: -6.54, // Q
				Aspargine: -14.03, // N
				Lysine: 1.0, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 20.26, // E
				Cysteine: 1.0, // C
				Tryptophan: -14.03, // W
				Arginine: 1.0, // R
				Glycine: -7.49, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Alanine: {
		Names: { Symbol: "A", Short: "Ala" },
		Props: {
			Mass: 71.0779,
			Atoms: {
				Hydrogen: 5,
				Carbon: 3,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: 1.8,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: 20.26, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: -7.49, // H
				Glutamine: 1.0, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: -7.49, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 44.94, // C
				Tryptophan: 1.0, // W
				Arginine: 1.0, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Tyrosine: {
		Names: { Symbol: "Y", Short: "Tyr" },
		Props: {
			Mass: 163.17326,
			Atoms: {
				Hydrogen: 9,
				Carbon: 9,
				Oxygen: 2,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: -1.3,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 44.94, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: 13.34, // P
				Threonine: -7.49, // T
				Alanine: 24.68, // A
				Tyrosine: 13.34, // Y
				Histidine: 13.34, // H
				Glutamine: 1.0, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: 24.68, // D
				GlutamicAcid: -6.54, // E
				Cysteine: 1.0, // C
				Tryptophan: -9.37, // W
				Arginine: -15.91, // R
				Glycine: -7.49, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	STOP: {
		Names: { Symbol: "-", Short: "(STOP)" },
		Props: {
			Mass: 0,
			Atoms: {
				Hydrogen: 0,
				Carbon: 0,
				Oxygen: 0,
				Nitrogen: 0,
				Sulphur: 0,
			},
			Hydropathicity: 0,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: 1.0, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 1.0, // H
				Glutamine: 1.0, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 1.0, // W
				Arginine: 1.0, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Histidine: {
		Names: { Symbol: "H", Short: "His" },
		Props: {
			Mass: 137.13928,
			Atoms: {
				Hydrogen: 7,
				Carbon: 6,
				Oxygen: 1,
				Nitrogen: 3,
				Sulphur: 0,
			},
			Hydropathicity: -3.2,
			DipeptideInstability: {
				Phenylalanine: -9.37, // F
				Leucine: 1.0, // L
				Isoleucine: 44.94, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: -1.88, // P
				Threonine: -6.54, // T
				Alanine: 1.0, // A
				Tyrosine: 44.94, // Y
				Histidine: 1.0, // H
				Glutamine: 1.0, // Q
				Aspargine: 24.68, // N
				Lysine: 24.68, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: -1.88, // W
				Arginine: 1.0, // R
				Glycine: -9.37, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Glutamine: {
		Names: { Symbol: "Q", Short: "Gln" },
		Props: {
			Mass: 128.12922,
			Atoms: {
				Hydrogen: 8,
				Carbon: 5,
				Oxygen: 2,
				Nitrogen: 2,
				Sulphur: 0,
			},
			Hydropathicity: -3.5,
			DipeptideInstability: {
				Phenylalanine: -6.54, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: -6.54, // V
				Serine: 44.94, // S
				Proline: 20.26, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: -6.54, // Y
				Histidine: 1.0, // H
				Glutamine: 20.26, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: 20.26, // D
				GlutamicAcid: 20.26, // E
				Cysteine: -6.54, // C
				Tryptophan: 1.0, // W
				Arginine: 1.0, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Aspargine: {
		Names: { Symbol: "N", Short: "Asn" },
		Props: {
			Mass: 114.10264,
			Atoms: {
				Hydrogen: 6,
				Carbon: 4,
				Oxygen: 2,
				Nitrogen: 2,
				Sulphur: 0,
			},
			Hydropathicity: -3.5,
			DipeptideInstability: {
				Phenylalanine: -14.03, // F
				Leucine: 1.0, // L
				Isoleucine: 44.94, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: -1.88, // P
				Threonine: -7.49, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 1.0, // H
				Glutamine: -6.54, // Q
				Aspargine: 1.0, // N
				Lysine: 24.68, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: -1.88, // C
				Tryptophan: -9.37, // W
				Arginine: 1.0, // R
				Glycine: -14.03, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Lysine: {
		Names: { Symbol: "K", Short: "Lys" },
		Props: {
			Mass: 128.17228,
			Atoms: {
				Hydrogen: 12,
				Carbon: 6,
				Oxygen: 1,
				Nitrogen: 2,
				Sulphur: 0,
			},
			Hydropathicity: -3.9,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: -7.49, // L
				Isoleucine: -7.49, // I
				Methionine: 33.6, // M
				Valine: -7.49, // V
				Serine: 1.0, // S
				Proline: -6.54, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 1.0, // H
				Glutamine: 24.68, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 1.0, // W
				Arginine: 33.6, // R
				Glycine: -7.49, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	AsparticAcid: {
		Names: { Symbol: "D", Short: "Asp" },
		Props: {
			Mass: 115.0874,
			Atoms: {
				Hydrogen: 5,
				Carbon: 4,
				Oxygen: 3,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: -3.5,
			DipeptideInstability: {
				Phenylalanine: -6.54, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 20.26, // S
				Proline: 1.0, // P
				Threonine: -14.03, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 1.0, // H
				Glutamine: 1.0, // Q
				Aspargine: 1.0, // N
				Lysine: -7.49, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 1.0, // W
				Arginine: -6.54, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	GlutamicAcid: {
		Names: { Symbol: "E", Short: "Glu" },
		Props: {
			Mass: 129.11398,
			Atoms: {
				Hydrogen: 7,
				Carbon: 5,
				Oxygen: 3,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: -3.5,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 20.26, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 20.26, // S
				Proline: 20.26, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: -6.54, // H
				Glutamine: 20.26, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: 20.26, // D
				GlutamicAcid: 33.6, // E
				Cysteine: 44.94, // C
				Tryptophan: -14.03, // W
				Arginine: 1.0, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Cysteine: {
		Names: { Symbol: "C", Short: "Cys" },
		Props: {
			Mass: 103.1429,
			Atoms: {
				Hydrogen: 5,
				Carbon: 3,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 1,
			},
			Hydropathicity: 2.5,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 20.26, // L
				Isoleucine: 1.0, // I
				Methionine: 33.6, // M
				Valine: -6.54, // V
				Serine: 1.0, // S
				Proline: 20.26, // P
				Threonine: 33.6, // T
				Alanine: 1.0, // A
				Tyrosine: 1.0, // Y
				Histidine: 33.6, // H
				Glutamine: -6.54, // Q
				Aspargine: 1.0, // N
				Lysine: 1.0, // K
				AsparticAcid: 20.26, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 24.68, // W
				Arginine: 1.0, // R
				Glycine: 1.0, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Tryptophan: {
		Names: { Symbol: "W", Short: "Trp" },
		Props: {
			Mass: 186.2099,
			Atoms: {
				Hydrogen: 10,
				Carbon: 11,
				Oxygen: 1,
				Nitrogen: 2,
				Sulphur: 0,
			},
			Hydropathicity: -0.9,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 13.34, // L
				Isoleucine: 1.0, // I
				Methionine: 24.68, // M
				Valine: -7.49, // V
				Serine: 1.0, // S
				Proline: 1.0, // P
				Threonine: -14.03, // T
				Alanine: -14.03, // A
				Tyrosine: 1.0, // Y
				Histidine: 24.68, // H
				Glutamine: 1.0, // Q
				Aspargine: 13.34, // N
				Lysine: 1.0, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 1.0, // W
				Arginine: 1.0, // R
				Glycine: -9.37, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Arginine: {
		Names: { Symbol: "R", Short: "Arg" },
		Props: {
			Mass: 156.18568,
			Atoms: {
				Hydrogen: 12,
				Carbon: 6,
				Oxygen: 1,
				Nitrogen: 4,
				Sulphur: 0,
			},
			Hydropathicity: -4.5,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: 1.0, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 44.94, // S
				Proline: 20.26, // P
				Threonine: 1.0, // T
				Alanine: 1.0, // A
				Tyrosine: -6.54, // Y
				Histidine: 20.26, // H
				Glutamine: 20.26, // Q
				Aspargine: 13.34, // N
				Lysine: 1.0, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: 1.0, // E
				Cysteine: 1.0, // C
				Tryptophan: 58.28, // W
				Arginine: 58.28, // R
				Glycine: -7.49, // G
				STOP: 0.0, // leave empty
			},
		},
	},
	Glycine: {
		Names: { Symbol: "G", Short: "Gly" },
		Props: {
			Mass: 57.05132,
			Atoms: {
				Hydrogen: 3,
				Carbon: 2,
				Oxygen: 1,
				Nitrogen: 1,
				Sulphur: 0,
			},
			Hydropathicity: -0.4,
			DipeptideInstability: {
				Phenylalanine: 1.0, // F
				Leucine: 1.0, // L
				Isoleucine: -7.49, // I
				Methionine: 1.0, // M
				Valine: 1.0, // V
				Serine: 1.0, // S
				Proline: 1.0, // P
				Threonine: -7.49, // T
				Alanine: -7.49, // A
				Tyrosine: -7.49, // Y
				Histidine: 1.0, // H
				Glutamine: 1.0, // Q
				Aspargine: -7.49, // N
				Lysine: -7.49, // K
				AsparticAcid: 1.0, // D
				GlutamicAcid: -6.54, // E
				Cysteine: 1.0, // C
				Tryptophan: 13.34, // W
				Arginine: 1.0, // R
				Glycine: 13.34, // G
				STOP: 0.0, // leave empty
			},
		},
	},
};

export const WATER_MASS = 18.015;
export const WATER_ATOMS: Atoms = {
	Hydrogen: 2,
	Oxygen: 1,
	Carbon: 0,
	Nitrogen: 0,
	Sulphur: 0,
};

export const ATOM_MASS: Atoms = {
	Hydrogen: 1.008,
	Carbon: 12.01,
	Oxygen: 15.999,
	Nitrogen: 14.006,
	Sulphur: 32.065,
};
