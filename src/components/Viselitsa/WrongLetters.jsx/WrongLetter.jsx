import React from 'react';
import styled from 'styled-components';

const StyledLetter = styled.div`
	padding: 8px;
	margin: 4px;
	/* position: relative; */
	font-size: 25px;
	text-transform: uppercase;
	font-weight: 200;
	color: #d02626;
	border: #d02626 3px solid;
	box-shadow: 0 0 2px 1px #d02626;
	border-radius: 7px;
	transition: .4s;
	visibility: ${(props) => props.visibility || ""};
	cursor: pointer;
	@media only screen and (max-width: 600px) {font-size: 15px}
	/* display: none; */
	&:hover {
		color: #ff1212;
		border: #ff1212 3px solid;
		box-shadow: 0 0 15px 1px #ff1212ae;
	}
	&:focus{
		box-shadow: 0 0 20px 1px #ff4545ad;
	}
	
	`

export const WrongLetter = (props) => {
	return (
		<StyledLetter>
			{props.letter}
		</StyledLetter>
		
	);
};