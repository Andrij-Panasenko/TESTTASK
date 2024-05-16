import React from 'react';
import sprite from '../../assets/sprite.svg';
import '../../css/header/header-mobile.scss';
import '../../css/header/header-tablet.scss';
import '../../css/header/header-desktop.scss';
import { PrimaryButton } from '../Buttons/PrimaryButton.jsx';

export const Header = () => {
    return (
        <>
            <div className="container">
                <header className="header">
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
                </header>
            </div>
        </>
    );
};
