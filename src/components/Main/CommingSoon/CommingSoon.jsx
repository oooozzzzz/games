import React from "react";
import styled, { keyframes } from "styled-components";

const StyledImg = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* background: #e7e7e7; */
	img {
		width: 250px;
		height: 250px;
	}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledText = styled.div`
	font-size: 30px;
	color: #666;
	padding: 10px;
	font-weight: 200;
	text-transform: uppercase;
	&:hover {
		color: #4a4a4a;
	}
`;

const StyledButton = styled.button`
	background: none;
	padding: 5px;
	border: 2px solid #4a4a4a;
	border-radius: 7px;
	color: #4a4a4a;
	font-size: 15px;
	text-transform: uppercase;
	transition: .2s;
	font-weight: 200;
	&:hover {
		/* color: #ffffff; */
		/* border: 2px solid #000000; */
		/* background: #3e3e3e76; */
		box-shadow: 0 0 4px 1px #4a4a4a;
	}
`

const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate} ${(props) => props.speed + 's' || "18s"} linear infinite;
	padding: 2rem 1rem;
	font-size: 1.2rem;
`;

const FlexRow = styled.div`
	display: flex;
	margin: 15px 0 0 0;
	width: 70%;
	align-items: start;
	justify-content: space-evenly;
`

export const CommingSoon = (props) => {
	
	return (
		<StyledImg className="img">
			<StyledText>В разработке</StyledText>
			<Rotate 
			speed={props.speed}
			>
				<img src="https://www.svgrepo.com/show/530579/set-up.svg" alt="" />
			</Rotate>
			<FlexRow>
			<StyledButton onClick={props.speedUp}>Ускорить</StyledButton>
			<StyledButton onClick={props.speedDown}>Замедлить </StyledButton>
			</FlexRow>
		</StyledImg>
	);
};
