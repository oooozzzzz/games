import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	width: 90px;
	height: 35px;
	border: 2px solid ${({ active }) => (active ? "#1356d1" : "cornflowerblue")};
	border-radius: 20px;
	text-transform: uppercase;
	color: ${({ active }) => (active ? "aliceblue" : "#3e3e3e")};
	background: ${({ active }) => (active ? "#1356d1" : "transparent")};
	/* box-shadow: ${({ active }) =>
		active ? "0px 0px 8px -3px rgba(0,0,0,1)" : ""}; */
	transition: 0.4s;
	&:hover
		${({ active }) =>
			active
				? "{}"
				: `
	{
	color: aliceblue;
	background: #6495ed;
	}`}{}
`;

export const IconButton = ({ text, active, setTrue, setFalse }) => {
	return (
		<StyledButton active={active} onClick={active ? setFalse : setTrue}>
			{text}
		</StyledButton>
	);
};
