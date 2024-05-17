import React, { useEffect, useState } from 'react';
import { UsersItem } from './UsersItem/UsersItem.jsx';
import { getUsers } from '../../api/getUsers.js';
import '../../css/_variables.scss';
import '../../css/users/users.scss';
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
                    <SectionTitle
                        tag="h2"
                        title="Working with GET request"
                        className="users-title"
                    />
                    <ul className="users-list">
                        {usersList.map((user) => (
                            <UsersItem key={user.id} data={user} />
                        ))}
                    </ul>
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
