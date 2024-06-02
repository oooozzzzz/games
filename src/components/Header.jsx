import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderRow = styled.div`
	display: flex;
	width: 100%;
	height: 64px;
	justify-content: start;
	align-content: center;
	transition: .4s;
	&:hover {
		box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.75);
		transform: translateY(-1px);
	}
`;

const HeaderItem = styled.div`
will-change: transform;
	display: inline-block;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		/* padding-top: 40%; */
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			height: 1px;
			width: 0px;
			transition: 0.35s;
			background: #666;

		}
		&:hover::after {
			width: 100%;
			left: 0;
		}
		text-decoration: none;
		color: #666;
	}
`;

export const Header = () => {
	return (
		<header className="header">
			<HeaderRow className="header__row">
				<HeaderItem className="header__item">
					<img src="" alt=""></img>
				</HeaderItem>
				<HeaderItem className="header__item">
				<NavLink to='/viselitsa'>
					<a href="###">Виселица</a>
				</NavLink>
				</HeaderItem>
				<HeaderItem className="header__item">
				<NavLink to='/comingsoon'>
					<a href="###">Скоро</a>
					</NavLink>
				</HeaderItem>
				<HeaderItem className="header__item">
					<NavLink to='/comingsoon'>
					<a href="###">Скоро</a>
					</NavLink>
				</HeaderItem>
				<HeaderItem className="header__item">
					<NavLink to='/comingsoon'>
					<a href="###">Скоро</a>
					</NavLink>
				</HeaderItem>
				<HeaderItem className="header__item">
					<NavLink to='/comingsoon'>
					<a href="###">Скоро</a>
					</NavLink>
				</HeaderItem>
			</HeaderRow>
		</header>
	);
};
