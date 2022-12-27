import InputContainer from "../../features/codeInput/components/Input/InputContainer";

export default function CodeInput() {
	return (
		<div>
			<InputContainer />
		</div>
	);
}

// Keep track of input code (entire page is input)
// Prevent user from typing illegal characters
// Prevent user from typing T and U in one sequence (xor)

// Divide code visually (space every 3 letters)
// Highlight start codons
// Allow user to select start point

// Autosave user input
// Pass code to CodeAnalysis page (using link)
