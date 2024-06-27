import React from "react";
import styled from "styled-components";
// import { ImgInput } from "./ImgAndInput/ImgInput";
import { LettersContainer } from "./Letters/LettersContainer";
import { ImgInputContainer } from "./ImgAndInput/ImgInputContainer";
// import { updateCurrentWordAction, updatetWordAction } from "../../redux/viselitsa-reducer";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	padding: 10px;
	overflow: hidden;
	background: #f4f4f4;
	/* flex-wrap: wrap; */
	/* background: #000; */
`;

export const Viselitsa = (props) => {
	return (
		<Container className="container">
			<ImgInputContainer />
			<LettersContainer />
		</Container>
	);
};
