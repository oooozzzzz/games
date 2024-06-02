const confirmLetter = "CONFIRM_LETTER";
const updateNewLetter = "UPDATE_NEW_LETTER";
const updateCurrentWord = "UPDATE_CURRENT_WORD";
const updatetWord = "UPDATE_WORD";

const initialState = {
	words: [
		"балда",
		"голова",
		"жопа",
		"тело",
		"руки",
		"виселица",
		"зола",
		"фрукт",
		"овощи",
		"банан",
		"яблоко",
		"груша",
		"солнце",
		"закат",
		"мебель",
		"гитара",
		"скрипка",
		"дудка",
	],
	currentWord: [],
	word: [],
	setting: {
		mistakes: 6,
	},
	currentInput: {
		newLetter: "",
		mistakes: [],
		rights: [],
		counter: 0,
	},
};

export const viselitsaReducer = (state = initialState, action) => {
	let newState = structuredClone(state);

	let newLetter = state.currentInput.newLetter; // Новая буква, которую ввел пользователь

	const toMistakes = (element) => {
		newState.currentInput.mistakes.push(element);
	};

	const rightsCounter = () => {
		newState.currentInput.counter += 1;
	};

	const makeVisible = (letter) => {
		if (!state.currentInput.rights.includes(letter)) {
			newState.currentWord.forEach((e) => {
				if (letter === e.letter) {
					e.visibility = "visible";
					rightsCounter();
				}
			});
		}
	};

	const toRights = (letter) => {
		newState.currentInput.rights.push(letter);
	};

	const confirmLetterFunction = () => {
		if (state.word.includes(newLetter)) {
			makeVisible(newLetter); // Делает введенную букву видимой
			toRights(newLetter);
			newState.currentInput.newLetter = ""; // Добавляет введенную букву в список правильных
		} else {
			toMistakes(newLetter); // Добавляет введенную букву в список ошибочных
			newState.currentInput.newLetter = ""; // Обнуление инпута
		}
	};
	switch (action.type) {
		case confirmLetter:
			if (
				newLetter !== "" &&
				state.word.length > 0 && // Защита от дурака. Проверки не позволяют вводить буквы до появления в состоянии слова и вводить пустые строки
				state.currentInput.mistakes.length <= state.setting.mistakes - 1 &&
				state.currentInput.counter < state.word.length // Блокирует кнопку, если количество ошибок равно указанному числу
			) {
				confirmLetterFunction();
			}
			return newState;

		case updateNewLetter:
			if (
				newLetter.length < 1 &&
				state.currentInput.mistakes.length < state.setting.mistakes &&
				state.currentInput.counter < state.word.length
			) {
				newState.currentInput.newLetter = action.value;
			}
			return newState;

		case updateCurrentWord:
			let currentWord = state.word.map((e) => {
				return { letter: e, visibility: "hidden" };
			});
			newState.currentWord = currentWord;
			newState.currentInput.mistakes = [];
			newState.currentInput.counter = 0;
			newState.currentInput.rights = [];
			return newState;

		case updatetWord:
			let randomElement =
				state.words[Math.floor(Math.random() * state.words.length)];
			newState.word = randomElement.split("");
			return newState;
		default:
			return newState;
	}
};

export const updateCurrentWordAction = () => ({
	type: updateCurrentWord,
});

export const updatetWordAction = () => ({
	type: updatetWord,
});

export const confirmLetterAction = () => ({
	type: confirmLetter,
});

export const updateNewLetterAction = (letter) => ({
	type: updateNewLetter,
	value: letter,
});
