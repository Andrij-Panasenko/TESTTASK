import React from "react";
import sprite from '../../assets/sprite.svg';

export const Header = () => {
    return (
        <>
            <header>
                <div>
                    <svg width="104" height="26">
                        <use xlinkHref={`${sprite}#icon-Logo`}></use>
                    </svg>
                </div>
                <ul>
                    <li>
                        <button type="button">Users</button>
                    </li>
                    <li>
                        <button type="button">Sign up</button>
                    </li>
                </ul>
            </header>
        </>
    );
};