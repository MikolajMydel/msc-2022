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
