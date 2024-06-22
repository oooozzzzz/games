import React from "react";
import styled from "styled-components";
import { WrongLetters } from "../../WrongLetters.jsx/WrongLetters";

const InputContainer = styled.div`
	display: flex;
	width: 50%;
	height: 100%;
	text-align: center;
	justify-content: center;
	flex-direction: column;
`;

const FormConfirm = styled.div`
	display: flex;
	height: 50%;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	text-transform: uppercase;
	padding: 10px;
	transition: .5s;
	background: #444444;
	color: #ffffff;
	&:hover {
		background: #252525;
	}
	border-radius: 7px;
	margin: 0 0 0 20px;
`

const StyledInput = styled.input`
	height: 40px;
	width: 40px;
	background-color: #fafafa;
	/* padding: 20px; */
	border: solid 1px #ababab;
	border-radius: 7px;
	font-size: 25px;
	font-weight: 100;
	text-transform: uppercase;
	transition: .4s;
	&:focus {
      color: #777778;
      background-color: #ffffff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 5px 0.2rem rgba(158, 158, 158, 0.25);
			outline: none;
    }
		/* &:hover{
			cursor: pointer;
			box-shadow: 0 0 2px 0.1rem rgba(158, 158, 158, 0.25);
		} */
	/* display: flex;
	align-items: center;
	justify-content: center; */
	vertical-align: middle;
	text-align: center;
`

export const Input = (props) => {
	// const onClickFunc = () => {
	// 	const action = confirmLetterAction()
	// 	props.dispatch(action)
	// }

	const onChange = (e) => {
		props.onChange(e.target.value)
	}
	return (
		<InputContainer className="input">
			<WrongLetters currentInput={props.currentInput}/>
			<FormConfirm>
				<StyledInput onChange={onChange} value={props.currentInput.newLetter} type="text" />
				<Button onClick={props.onClick}>ok</Button>
			</FormConfirm>
		</InputContainer>
	);
};

