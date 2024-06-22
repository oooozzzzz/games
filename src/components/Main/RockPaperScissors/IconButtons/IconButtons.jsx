import React, { useState } from "react";
import { Flex } from "../../../Flex";
import styled from "styled-components";
import { IconButton } from "./IconButton";

const StyledIconButtons = styled.div`
	width: 100%;
	height: 15%;
`;
export const IconButtons = (props) => {
	const [buttons, setButtons] = useState([
		{ text: "rock", active: false },
		{ text: "paper", active: false },
		{ text: "scissors", active: false },
	]);

	return (
		<>
			<StyledIconButtons className="iconButtons">
				<Flex align="center" height={"100%"} justify={"space-evenly"}>
					{buttons.map((e) => {
						return <IconButton text={e.text} active={e.active} />;
					})}
				</Flex>
			</StyledIconButtons>
		</>
	);
};
