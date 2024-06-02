const SPEED_UP = "SPEED_UP";
const SPEED_DOWN = "SPEED_DOWN";

const initialState = {
	speed: 16,
};

export const speedUpAC = () => {
	return { type: SPEED_UP };
};
export const speedDownAC = () => {
	return { type: SPEED_DOWN };
};

export const commingSoonReducer = (state = initialState, action) => {
	let newState = structuredClone(state);
	let scale = 3
	switch (action.type) {
		case SPEED_UP:
			if (state.speed > 1) {
				newState.speed -= scale;
			}
			return newState;

		case SPEED_DOWN:
			newState.speed += scale;
			return newState;

		default:
			return newState;
	}
};
