import React from 'react';
import '../../../css/users/usersItem/users-item-mobile.scss';
import '../../../css/users/usersItem/users-item-tablet.scss';
import '../../../css/users/usersItem/users-item-desktop.scss';


export const UsersItem = ({data}) => {
    const { name, email, photo, position, phone } = data;

   
    return (
        <>
            <li className="user-item">
                <img
                    className="user-avatar"
                    src={photo}
                    alt={name + "'s photo"}
                />
                <h3 className="user-name">{name}</h3>
                <div className="user-data-wrapp">
                    <p className="user-position">{position}</p>
                    <p className="user-email">{email}</p>
                    <p className="user-phone">{phone}</p>
                </div>
            </li>
        </>
    );
};
