import React from "react";
import { Flex } from "../../Flex";
import styled from "styled-components";
import { IconButtons } from "./IconButtons/IconButtons";

const ConnectButton = styled.button`
	margin: 15px 30px;
	border: 2px solid blueviolet;
	padding: 10px;
	border-radius: 20px;
	font-size: 16px;
	transition: 0.4s;
	color: #4a4a4a;
	background: transparent;
	&:hover {
		color: aliceblue;
		background: blueviolet;
	}
`;

const Center = styled.div`
	background: transparent;
	height: 70%;
	width: 100%;
`;



const Wrapper = styled.div`
	height: 100%;

`

export const RockPaperScissors = (props) => {
	return (
		<Wrapper>
			<Flex height={'15%'}justify={"end"} align={"center"} className="connect_container">
				<ConnectButton className="connectButton">connect</ConnectButton>
			</Flex>
			<Center className="center"></Center>
			<IconButtons />
		</Wrapper>
	);
};
