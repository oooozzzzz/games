import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	width: 90px;
	height: 35px;
	border: 2px solid cornflowerblue;
	border-radius: 20px;
	text-transform: uppercase;
	color: #3e3e3e;
	background: transparent;
	transition: 0.4s;
	&:hover {
		color: aliceblue;
		background: cornflowerblue;
	}
`;

export const IconButton = ({ text }) => {
	const [active, setActive] = useState(false);
// придумать как устанавливать активную кнопку
	return (
		<StyledButton
			onClick={() => {
				active ? setActive(false) : setActive(true);
			}}
		>
			{text}
		</StyledButton>
	);
};
