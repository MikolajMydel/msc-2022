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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: 20.26,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 33.6,
				Histidine: 1.0,
				Glutamine: 1.0,
				Aspargine: 1.0,
				Lysine: -14.03,
				AsparticAcid: 13.34,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 1.0,
				Arginine: 1.0,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: 20.26,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 1.0,
				Glutamine: 33.6,
				Aspargine: 1.0,
				Lysine: -7.49,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 24.68,
				Arginine: 20.26,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 20.26,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: -7.49,
				Serine: 1.0,
				Proline: -1.88,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 13.34,
				Glutamine: 1.0,
				Aspargine: 1.0,
				Lysine: -7.49,
				AsparticAcid: 1.0,
				GlutamicAcid: 44.94,
				Cysteine: 1.0,
				Tryptophan: 1.0,
				Arginine: 1.0,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: -1.88,
				Valine: 1.0,
				Serine: 44.94,
				Proline: 44.94,
				Threonine: -1.88,
				Alanine: 13.34,
				Tyrosine: 24.68,
				Histidine: 58.28,
				Glutamine: -6.54,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 1.0,
				Arginine: -6.54,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: 20.26,
				Threonine: -7.49,
				Alanine: 1.0,
				Tyrosine: -6.54,
				Histidine: 1.0,
				Glutamine: 1.0,
				Aspargine: 1.0,
				Lysine: -1.88,
				AsparticAcid: -14.03,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 1.0,
				Arginine: 1.0,
				Glycine: -7.49,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 20.26,
				Proline: 44.94,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 1.0,
				Glutamine: 20.26,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: 1.0,
				GlutamicAcid: 20.26,
				Cysteine: 33.6,
				Tryptophan: 1.0,
				Arginine: 20.26,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 20.26,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: -6.54,
				Valine: 20.26,
				Serine: 20.26,
				Proline: 20.26,
				Threonine: 1.0,
				Alanine: 20.26,
				Tyrosine: 1.0,
				Histidine: 1.0,
				Glutamine: 20.26,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: -6.54,
				GlutamicAcid: 18.38,
				Cysteine: -6.54,
				Tryptophan: -1.88,
				Arginine: -6.54,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 13.34,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: 1.0,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 1.0,
				Glutamine: -6.54,
				Aspargine: -14.03,
				Lysine: 1.0,
				AsparticAcid: 1.0,
				GlutamicAcid: 20.26,
				Cysteine: 1.0,
				Tryptophan: -14.03,
				Arginine: 1.0,
				Glycine: -7.49,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: 20.26,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: -7.49,
				Glutamine: 1.0,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: -7.49,
				GlutamicAcid: 1.0,
				Cysteine: 44.94,
				Tryptophan: 1.0,
				Arginine: 1.0,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 44.94,
				Valine: 1.0,
				Serine: 1.0,
				Proline: 13.34,
				Threonine: -7.49,
				Alanine: 24.68,
				Tyrosine: 13.34,
				Histidine: 13.34,
				Glutamine: 1.0,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: 24.68,
				GlutamicAcid: -6.54,
				Cysteine: 1.0,
				Tryptophan: -9.37,
				Arginine: -15.91,
				Glycine: -7.49,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: 1.0,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 1.0,
				Glutamine: 1.0,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 1.0,
				Arginine: 1.0,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: -9.37,
				Leucine: 1.0,
				Isoleucine: 44.94,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: -1.88,
				Threonine: -6.54,
				Alanine: 1.0,
				Tyrosine: 44.94,
				Histidine: 1.0,
				Glutamine: 1.0,
				Aspargine: 24.68,
				Lysine: 24.68,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: -1.88,
				Arginine: 1.0,
				Glycine: -9.37,
				STOP: 0.0,
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
				Phenylalanine: -6.54,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: -6.54,
				Serine: 44.94,
				Proline: 20.26,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: -6.54,
				Histidine: 1.0,
				Glutamine: 20.26,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: 20.26,
				GlutamicAcid: 20.26,
				Cysteine: -6.54,
				Tryptophan: 1.0,
				Arginine: 1.0,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: -14.03,
				Leucine: 1.0,
				Isoleucine: 44.94,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: -1.88,
				Threonine: -7.49,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 1.0,
				Glutamine: -6.54,
				Aspargine: 1.0,
				Lysine: 24.68,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: -1.88,
				Tryptophan: -9.37,
				Arginine: 1.0,
				Glycine: -14.03,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: -7.49,
				Isoleucine: -7.49,
				Methionine: 33.6,
				Valine: -7.49,
				Serine: 1.0,
				Proline: -6.54,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 1.0,
				Glutamine: 24.68,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 1.0,
				Arginine: 33.6,
				Glycine: -7.49,
				STOP: 0.0,
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
				Phenylalanine: -6.54,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 20.26,
				Proline: 1.0,
				Threonine: -14.03,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 1.0,
				Glutamine: 1.0,
				Aspargine: 1.0,
				Lysine: -7.49,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 1.0,
				Arginine: -6.54,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 20.26,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 20.26,
				Proline: 20.26,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: -6.54,
				Glutamine: 20.26,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: 20.26,
				GlutamicAcid: 33.6,
				Cysteine: 44.94,
				Tryptophan: -14.03,
				Arginine: 1.0,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 20.26,
				Isoleucine: 1.0,
				Methionine: 33.6,
				Valine: -6.54,
				Serine: 1.0,
				Proline: 20.26,
				Threonine: 33.6,
				Alanine: 1.0,
				Tyrosine: 1.0,
				Histidine: 33.6,
				Glutamine: -6.54,
				Aspargine: 1.0,
				Lysine: 1.0,
				AsparticAcid: 20.26,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 24.68,
				Arginine: 1.0,
				Glycine: 1.0,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 13.34,
				Isoleucine: 1.0,
				Methionine: 24.68,
				Valine: -7.49,
				Serine: 1.0,
				Proline: 1.0,
				Threonine: -14.03,
				Alanine: -14.03,
				Tyrosine: 1.0,
				Histidine: 24.68,
				Glutamine: 1.0,
				Aspargine: 13.34,
				Lysine: 1.0,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 1.0,
				Arginine: 1.0,
				Glycine: -9.37,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: 1.0,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 44.94,
				Proline: 20.26,
				Threonine: 1.0,
				Alanine: 1.0,
				Tyrosine: -6.54,
				Histidine: 20.26,
				Glutamine: 20.26,
				Aspargine: 13.34,
				Lysine: 1.0,
				AsparticAcid: 1.0,
				GlutamicAcid: 1.0,
				Cysteine: 1.0,
				Tryptophan: 58.28,
				Arginine: 58.28,
				Glycine: -7.49,
				STOP: 0.0,
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
				Phenylalanine: 1.0,
				Leucine: 1.0,
				Isoleucine: -7.49,
				Methionine: 1.0,
				Valine: 1.0,
				Serine: 1.0,
				Proline: 1.0,
				Threonine: -7.49,
				Alanine: -7.49,
				Tyrosine: -7.49,
				Histidine: 1.0,
				Glutamine: 1.0,
				Aspargine: -7.49,
				Lysine: -7.49,
				AsparticAcid: 1.0,
				GlutamicAcid: -6.54,
				Cysteine: 1.0,
				Tryptophan: 13.34,
				Arginine: 1.0,
				Glycine: 13.34,
				STOP: 0.0,
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
