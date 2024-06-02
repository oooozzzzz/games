import React from 'react';
import styled from 'styled-components';
import { WrongLetter } from './WrongLetter';

const StyledWrongLetters = styled.div`
	display: flex;
	height: 50%;
	align-items: center;
	justify-content: start;
	flex-wrap: wrap;
`;

const WrongLettersContainer = styled.div`
		
display: flex;
width: 100%;
height: 50%;
justify-content: center;
align-items: center;

`

export const WrongLetters = (props) => {

	let letters = props.currentInput.mistakes.map((e) => {return <WrongLetter letter = {e}/>})
	return (
		<WrongLettersContainer>
		<StyledWrongLetters>
				{letters}
		</StyledWrongLetters>
		</WrongLettersContainer>
	);
};

