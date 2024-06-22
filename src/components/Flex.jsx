import React from 'react';
import styled from 'styled-components';


const StyledFlex = styled.div`
	display: flex;
	align-items: ${props => props.align || "start"};
	flex-direction: ${props => props.direction || "row"};
	justify-content: ${props => props.justify || "start"};
	margin: ${props => props.margin || "0 0 0 0"};
	position: ${props => props.position || ""};
	height: ${props => props.height || ""};
`

export const Flex = (props) => {
	return (
		<StyledFlex {...props}/>
	);
};
