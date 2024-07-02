import React, { useState } from "react";
import { Flex } from "../../../Flex";
import styled from "styled-components";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";

const StyledIconButtons = styled.div`
	width: 100%;
	height: 30%;
`;

const ResultIcon = styled.div`
	height: 50%;
`;
export const IconButtons = (props) => {
	const [buttons, setButtons] = useState([
		{ text: "rock", active: false },
		{ text: "paper", active: false },
		{ text: "scissors", active: false },
	]);
	const [active, setActive] = useState("");

	const setTrue = (event) => {
		setButtons(
			buttons.map((button) => {
				if (event.target.textContent === button.text) {
					setActive(button.text);
					return { ...button, active: true };
				} else {
					return { ...button, active: false };
				}
			})
		);
	};

	const setFalse = (event) => {
		setButtons(
			buttons.map((button) => {
				if (event.target.textContent === button.text) {
					setActive("");
					return { ...button, active: false };
				} else {
					return button;
				}
			})
		);
	};

	const onClick = (event, active) => {
		active ? setFalse(event) : setTrue(event);
	};

	return (
		<>
			<StyledIconButtons className="iconButtons">
				<ResultIcon className="resultIcon">
					<Flex align="center" height={"100%"} justify="center">
						<Icon active={active} />
					</Flex>
				</ResultIcon>
				<Flex align="center" height={"50%"} justify={"space-evenly"}>
					{buttons.map((e) => {
						return (
							<IconButton
								text={e.text}
								active={e.active}
								setTrue={setTrue}
								setFalse={setFalse}
								onClick={onClick}
							/>
						);
					})}
				</Flex>
			</StyledIconButtons>
		</>
	);
};
