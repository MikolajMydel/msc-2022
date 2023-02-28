// Input presentation component
import { useEffect } from "react";
import { handleChangeType, handleKeyDownType } from "../../../../types/events";
import styles from "./Input.module.scss";
import CodonList from "../../../../components/CodonList/CodonList";
import ControlledInput from "../../../../components/ControlledInput/ControlledInput";
import classNames from "classnames";
import { splitIntoCodons } from "../../../../utils/codonOperations";
import { sequenceTypes } from "../../../../types/biology/codeSequence";
import MessageList from "../../../../components/Message/MessageList";
import Message from "../../../../components/Message/Message";
import { allowedCharacters } from "../../utils/validateKeyboardInput";
import { useNavigate } from "react-router-dom";

const MESSAGE_DURATION = 3000;

type InputProps = {
	value: string;
	handleChange: handleChangeType;
	handleKeyDown: handleKeyDownType;
	error: boolean;
	cancelError: () => void;
	sequenceType: sequenceTypes;
	switchSequenceType: () => void;
};

export default function Input({
	value,
	handleChange,
	handleKeyDown,
	error,
	cancelError,
	sequenceType,
	switchSequenceType,
}: InputProps) {
	const codonsArray = splitIntoCodons(value);
	const navigate = useNavigate();
	useEffect(() => {
		if (error) setTimeout(cancelError, MESSAGE_DURATION);
	}, [error]);

	const errorMessage = error ? (
		<Message
			key={"Message"}
			title={"Invalid character"}
			className={styles.Message}
		>
			<div>Allowed characters:</div>
			<div className={styles.AllowedCharacters}>
				{allowedCharacters[sequenceType].join(", ")}
			</div>
		</Message>
	) : undefined;

	return (
		<div className={styles.Wrapper}>
			<button onClick={switchSequenceType} className={styles.InputButton}>
				{sequenceType}
			</button>
			<div className={styles.Input}>
				<ControlledInput
					className={classNames(styles.InputHTMLElement, {
						[styles.InputHTMLElementError]: error,
					})}
					type={"text"}
					value={value}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<MessageList>{errorMessage}</MessageList>
			<div className={styles.CodonsWrapper}>
				<CodonList codons={codonsArray} sequenceType={sequenceType} />
			</div>
			<button
				disabled={!value}
				className={styles.AnalysisButton}
				onClick={() => navigate(`/analysis/${value}`)}
			>
				Analysis
			</button>
		</div>
	);
}
