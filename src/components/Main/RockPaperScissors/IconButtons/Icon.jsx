import React from "react";
import rock from "../../../../assets/rock.png";
import paper from "../../../../assets/paper.png";
import scissors from "../../../../assets/scissors.png";
import styled from "styled-components";
import { Flex } from "../../../Flex";
import { IconButton } from "./IconButton";
import axios from "axios";

const postserver = "http://localhost:5000/send-item";

const StyledIcon = styled.div`
	/* opacity: ${({ active }) => (active ? "1" : "0")}; */
	display: ${({ active }) => (active ? "" : "none")};
	transition: 0.4s;
`;
const StyledImg = styled.img`
	height: 50px;
	width: 50px;
`;

const items = {
	rock: rock,
	paper: paper,
	scissors: scissors,
};

export const Icon = ({ active }) => {
	// const sendData = async () => {
	// 	await axios.post(postserver, {
	// 		item: active,
	// 		name: 'Dimas'
	// 	});
	// };

	// const getData = async () => {
	// 	const { data } = await axios.get("http://localhost:5000/get-item")
	// 	console.log(data);
	// }

	return (
		<StyledIcon active={active}>
			<Flex align="center" justify="center">
				{/* <button onClick={getData}>get data</button> */}
				<StyledImg src={items[active]} active={active} />
				<IconButton
					margin="0 0 0 15px"
					text="confirm"
					// onClick={sendData}
				>
					confirm
				</IconButton>
			</Flex>
		</StyledIcon>
	);
};
