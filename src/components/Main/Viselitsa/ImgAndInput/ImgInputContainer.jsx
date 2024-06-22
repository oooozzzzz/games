import { connect } from "react-redux";
import {
	confirmLetterAction,
	updateNewLetterAction,
} from "../../../../redux/viselitsa-reducer";
import { ImgInput } from "./ImgInput";


const mapStateToProps = (state) => {
	return {mistakes: state.viselitsa.currentInput.mistakes,
		currentInput: state.viselitsa.currentInput
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onClickFunc: () => {
			dispatch(confirmLetterAction());
		},
		onChangeFunc: (text) => {
			dispatch(updateNewLetterAction(text));
		},
	};
};

export const ImgInputContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ImgInput);
