import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	width: 90px;
	margin: ${({ margin }) => margin || ''};
	height: 35px;
	border: 2px solid ${({ active }) => (active ? "#1356d1" : "cornflowerblue")};
	border-radius: 20px;
	text-transform: uppercase;
	color: ${({ active }) => (active ? "aliceblue" : "#3e3e3e")};
	background: ${({ active }) => (active ? "#1356d1" : "transparent")};
	transition: 0.4s;
	&:hover
		${({ active }) =>
			active
				? "{}"
				: `
	{
	color: aliceblue;
	background: #6495ed;
	}`} {
	}
	&:active {
		background: #1356d1;
		border: #1356d1;
		color:aliceblue;
		transition: 0s;
	}
`;

export const IconButton = ({ text, active, setTrue, setFalse, margin, onClick }) => {
	return (
		<StyledButton active={active} onClick={active ? setFalse : setTrue} margin={margin}>
			{text}
		</StyledButton>
	);
};
