import React from "react";
import styled from "styled-components";
import { Point } from "./Point";

const StyledImg = styled.div`
	display: flex;
	/* opacity: .2; */
	width: 70%;
	height: 30%;
	align-items: center;
	justify-content: center;
	/* background: #000; */
	flex-wrap: wrap;
`;
const ImgContainer = styled.div`
	display: flex;
	width: 50%;
	align-items: center;
	justify-content: center;
`;

export const Img = (props) => {
	let circles = props.mistakes.map(() => {
		return <Point />;
	});
	return (
		<ImgContainer className="imgcontainer">
			<StyledImg className="img">{circles}</StyledImg>
		</ImgContainer>
	);
};
