import { connect } from "react-redux";
import { CommingSoon } from "./CommingSoon";
import { speedDownAC, speedUpAC } from "../../../redux/commingSoonReducer";

const mapStateToProps = (state) => {
	return {
		speed: String(state.commingSoon.speed)
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		speedUp: () => {dispatch(speedUpAC())},
		speedDown: () => {dispatch(speedDownAC())}
	};
};

export const ComminSoonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CommingSoon);