import React, { useEffect, useState } from 'react';
import { UsersItem } from './UsersItem/UsersItem.jsx';
import { getUsers } from '../../api/getUsers.js';
import '../../css/_variables.scss';
import '../../css/users/users-mobile.scss';
import '../../css/users/users-tablet.scss';
import '../../css/users/users-desktop.scss';
import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import { PrimaryButton } from '../Buttons/PrimaryButton.jsx';

export const Users = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsersList(data.users);
            return data;
        };
        fetchUsers();
    }, []);

    return (
        <>
            <section className="users-section">
                <div className="container">
                    {/* Heading of current section */}
                    <SectionTitle
                        tag="h2"
                        title="Working with GET request"
                        className="users-title"
                    />
                    {/* Mapping an array of users and passing prop 'data' with one user */}
                    <ul className="users-list">
                        {usersList.map((user) => (
                            <UsersItem key={user.id} data={user} />
                        ))}
                    </ul>
                    {/* Button 'Show more' */}
                    <PrimaryButton
                        className="users-button"
                        name="Show more"
                        type="button"
                    />
                </div>
            </section>
        </>
    );
};
