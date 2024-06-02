import React from "react";
import styled from "styled-components";
import { Letter } from "./Letter";

const StyledLetters = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	height: 40%;
`;

const StyledButton = styled.button`
	text-transform: uppercase;
	padding: 10px;
	transition: 0.5s;
	background: #444444;
	color: #ffffff;
	&:hover {
		background: #252525;
	}
	border-radius: 7px;
	@media only screen and (max-width: 600px) {
		margin: 0 0 0 10px;
	}
	margin: 0 0 0 20px;
`;

const FlexRow = styled.div`
	display: flex;
	@media (min-width: 900px) {
		width: 40%;
	}
	width: 60%;
	@media only screen and (max-width: 600px) {
		width: 70%;
	}
	align-items: center;
	justify-content: space-between;
`;

export class LettersC extends React.Component {
	// constructor(props) {
	// 	super(props);
	// // 	this.letters = this.props.word.map((e) => {
	// // 		return <Letter visibility={e.visibility} letter={e.letter} />;
	// // 	});
	// }
	render() {
		return (
			<StyledLetters>
				<FlexRow className="flex_row">
					{this.props.word.map((e) => {
						return <Letter visibility={e.visibility} letter={e.letter} />;
					})}
					<div className="dick">
						<StyledButton onClick={this.props.updateWord}>refresh</StyledButton>
					</div>
				</FlexRow>
			</StyledLetters>
		);
	}
	componentDidMount = () => { 
		this.props.updateWord();
	};
}
