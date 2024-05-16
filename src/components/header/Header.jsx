import React from 'react';
import sprite from '../../assets/sprite.svg';
import '../../css/header/header-mobile.scss';
import '../../css/_variables.scss';
import { PrimaryButton } from '../Buttons/PrimaryButton.jsx';

export const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header-wrapper">
                        <a href="/">
                            <svg width="104" height="26">
                                <use xlinkHref={`${sprite}#icon-Logo`}></use>
                            </svg>
                        </a>
                        <ul className="btn-list">
                            <li>
                                <PrimaryButton type="button" name="Users" />
                            </li>
                            <li>
                                <PrimaryButton type="button" name="Sign up" />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};
