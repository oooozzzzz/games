import styled from "styled-components";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Main } from "./components/Main/Main";
import { BrowserRouter} from "react-router-dom";

let Wrapper = styled.div`
height: 100vh;
`;

const Body = styled.div`
	font-family: "Inter", sans-serif;
	font-optical-sizing: auto;
	font-variation-settings: "slnt" 0;
	display: flex;
	flex-direction: column;
	background: linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db);
	height: 100%;
`;

const App = (props) => {
	return (
		<BrowserRouter>
		<Wrapper className="wrapper">
			<Body className="body">
				<Container className="container">
					<Header />
				</Container>
				<Container>
					<Main />
				</Container>
			</Body>
		</Wrapper>
		</BrowserRouter>

	);
};

export default App;
