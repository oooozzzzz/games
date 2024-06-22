import React from "react";
import styled from "styled-components";

const StyledLetter = styled.div`
	padding: 0 0 10px 0;
	/* position: relative; */
	font-size: 30px;
	text-transform: uppercase;
	font-weight: 200;
	color: #666;
	visibility: ${(props) => props.visibility || ""};
	cursor: pointer;
	/* display: none; */
	/* &::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: #000;
	} */
	&:hover {
		color: #4a4a4a;
	}
	@media only screen and (max-width: 600px) {font-size: 20px}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const BottomLine = styled.div`
	width: 100%;
	height: 1px;
	background: #000;
`;

export const Letter = (props) => {
	return (
		<Container className="container">
			<StyledLetter visibility={props.visibility}>{props.letter}</StyledLetter>
			<BottomLine className="borderLine"></BottomLine>
		</Container>
	);
};
