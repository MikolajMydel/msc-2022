export enum AminoAcid {
    Phenylalanine,
    Leucine,
    Isoleucine,
    Methionine, /* START codon */
    Valine,
    Serine,
    Proline,
    Threonine,
    Alanine,
    Tyrosine,
    STOP,
    Histidine,
    Glutamine,
    Aspargine,
    Lysine,
    AsparticAcid,
    GlutamicAcid,
    Cysterine,
    Tryptophan,
    Arginine,
    Glycine
}

type CodonTable = {
    [key: string]: AminoAcid;
}

export const CODON_TABLE: CodonTable = {
    /* Phenylalanine */
    UUU: AminoAcid.Phenylalanine,
    UUC: AminoAcid.Phenylalanine,
    /* Leucine */
    UUA: AminoAcid.Leucine,
    UUG: AminoAcid.Leucine,
    CUU: AminoAcid.Leucine,
    CUC: AminoAcid.Leucine,
    CUA: AminoAcid.Leucine,
    CUG: AminoAcid.Leucine,

    AUU: AminoAcid.Isoleucine,
    AUC: AminoAcid.Isoleucine,

    AUG: AminoAcid.Methionine, /* START */

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

    GGU: AminoAcid.Arginine,
    GGC: AminoAcid.Arginine,
    GGA: AminoAcid.Arginine,
    GGG: AminoAcid.Arginine,
}