import React from 'react';
import styled from 'styled-components';

const StyledPoint = styled.div`
	/* width: 20px;
	height: 20px; */
	padding: 20px;
	@media only screen and (max-width: 600px) {padding: 14px}
	margin: 0 7px;
	border-radius: 50%;
	background: #ff1212;
	box-shadow: 0 0 7px 0.2rem #d02626;
	display: inline-block;
	transition: .4s;
	&:hover{
		box-shadow: 0 0 22px 0.05rem #d02626;
	background: #fd1717;

	}

`

export const Point = (props) => {
	return (
		<StyledPoint/>
	);
};
