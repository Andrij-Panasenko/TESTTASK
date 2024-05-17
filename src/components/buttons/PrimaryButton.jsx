import React from 'react';
import '../../css/primaryButton.scss';

export const PrimaryButton = ({className, name, type }) => {
    const buttonClassName = className ? className : 'button';
    return (
        <button className={buttonClassName} type={type}>
            {name}
        </button>
    );
};
