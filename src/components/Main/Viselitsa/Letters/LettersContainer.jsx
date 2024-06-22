import {
	updateCurrentWordAction,
	updatetWordAction,
} from "../../../../redux/viselitsa-reducer.js";
import { connect } from "react-redux";
import { LettersC } from "./Letters С";

const mapStateToProps = (state) => {
	return {
		word: state.viselitsa.currentWord
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateWord: () => {
			dispatch(updatetWordAction());
			dispatch(updateCurrentWordAction());
		},
	};
};

export const LettersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LettersC);