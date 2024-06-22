import React from "react";
import styled from "styled-components";
import { Img } from "./ViselitsaImg/ImgVis/Img";
import { Input } from "./Input/Input";
// import { confirmLetterAction, updateNewLetterAction } from "../../../redux/viselitsa-reducer";

const StyledImgAndInput = styled.div`
	/* position: relative; */
	/* top: 0;
left: 0; */
	display: flex;
	height: 70%;
	width: 100%;
	flex-direction: row;
	/* justify-content: center;
align-items: center; */
`;

export const ImgInput = (props) => {

	// const onClickFunc = () => {
	// 	const action = confirmLetterAction()
	// 	props.dispatch(action)
	// }

	// const onClickFunc = () => {
	// 	const action = confirmLetterAction()
	// 	props.dispatch(action)
	// }

	// const onChangeFunc = (text) => {
	// 	const action = updateNewLetterAction(text)
	// 	props.dispatch(action)
	// }

	return (
		<StyledImgAndInput>
			<Img mistakes={props.mistakes}/>
			<Input
				currentInput={props.currentInput}
				onClick = {props.onClickFunc}
				onChange={props.onChangeFunc}
			/>
		</StyledImgAndInput>
	);
};

