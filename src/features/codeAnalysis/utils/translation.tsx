import { AminoAcid, CODON_TABLE } from "./staticvalues";
import { v4 as uuid } from "uuid";

type AcidProps = {
    codon: AminoAcid;
}

function Acid({ codon }: AcidProps) {
    return <span> { codon }</span>;
}

type AminoAcidsProps = {
    code: string,
    shift: number
}

export function AminoAcids({ code, shift }: AminoAcidsProps) {
    // remove first letters
    code = code.slice(shift);

    const codonsArray = code.match(/.{1,3}/g) ?? [];
    
    const aminoAcidArray: AminoAcid[] = [];

    codonsArray.forEach(codon => {
        aminoAcidArray.push(CODON_TABLE[codon]);
    });
    return (
        <div>
            P+{shift}
            {aminoAcidArray.map((codon) => (
                <Acid key={uuid()} codon={ codon } />
            ))}
        </div>
    );
}