import React from 'react';
import '../../css/primaryButton.scss';

export const PrimaryButton = ({ name, type }) => {
    return (
        <button className="button" type={type}>
            {name}
        </button>
    );
};
