import React from "react";
// import { Container } from "../Container";
import styled from "styled-components";
// import { Flex } from "../Flex";
import { Route, Routes } from "react-router-dom";
import { Viselitsa } from "../Viselitsa/Viselitsa";
import { ComminSoonContainer } from "./CommingSoon/CommingSoonContainer";

const MainTitle = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	padding: 0 auto 10px auto;
	font-weight: 900;
	font-size: 72px;
	@media only screen and (max-width: 600px) {
		
		font-size: 50px;
	}
	background: linear-gradient(
		90deg,
		#eb33ffa9,
		#ffb300af,
		#ff3333a7,
		#334effab,
		#eb33ffac
	);
	background-size: 200% auto;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: textflow 10s linear infinite;
	@keyframes textflow {
		from {
			background-position: 0% center;
		}
		to {
			background-position: 200% center;
		}
	}
`;

const MainLanding = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Game = styled.div`
	width: 80%;
	height: 520px;
	border: 2px solid #757575;
	border-radius: 20px;
	backdrop-filter: blur(40px);
	/* box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.40); */
	transition: 0.4s;
	&:hover {
		/* box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4); */
	}
	margin: 0 0 10px 0;
	overflow: hidden;
`;

// const LandingText = styled.div`
// 	padding: 15px;
// 	font-size: 24px;
// 	color: #666;
// `;

// const LandingButton = styled.div`
// 	cursor: pointer;
// `;
// const Button = styled.div`
// 	padding: 15px 30px;
// 	border-radius: 15px;
// 	font-weight: 500;
// 	border: #666 1px solid;
// 	color: #666;
// 	background: linear-gradient(90deg, #f4d6db, #b3dbd3);
// 	background-size: 250% auto;
// 	font-weight: 300;
// 	font-size: 20px;
// 	transition: 0.4s;
// 	background-position: 0 center;
// 	text-transform: uppercase;
// 	&:hover {
// 		background-position: 100% center;
// 		/* color: #f3f3f3; */
// 	}
// `;

export const Main = (props) => {
	return (
		<main className="main">
			<MainTitle className="main__title title">
				<h1 className="title__text">PORTFOLIO</h1>
			</MainTitle>
			<MainLanding className="main__landing landing">
				<Game className="game">
					<Routes>
						<Route path="/viselitsa" element={<Viselitsa />} />
						<Route path="/comingsoon" element={<ComminSoonContainer />} />
					</Routes>
				</Game>
				{/* <LandingText className="landing__text">
					<span>Ну чо погляди какая конфетка получается</span>
				</LandingText>
				<LandingButton className="landing__button">
					<Button>Кнопка</Button>
				</LandingButton> */}
				{/* <div className="landing__logos logos">
					<div className="logos__row">
						<div className="logos__item">
							<img></img>
						</div>
						<div className="logos__item">
							<img></img>
						</div>
						<div className="logos__item">
							<img></img>
						</div>
						<div className="logos__item">
							<img></img>
						</div>
					</div>
				</div> */}
			</MainLanding>
		</main>
	);
};
