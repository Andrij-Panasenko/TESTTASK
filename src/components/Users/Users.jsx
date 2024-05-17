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
    //page counter
    const [page, setPage] = useState(1);
    //count user items per page
    const [count, _] = useState(6);
    const [totalPages, setTotalPages] = useState(0);
    const [usersList, setUsersList] = useState([]);

    //sort users by register time. The newest first
    const filtrationUsers = (users) => {
        return users.sort(
            (a, b) => b.registration_timestamp - a.registration_timestamp
        );
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers(page, count);

            setUsersList(filtrationUsers(data.users));
            setTotalPages(data.total_pages);
            return data;
        };
        fetchUsers();
    }, [page, count]);

    //show more handler
    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

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
                    {page < totalPages && (
                        <PrimaryButton
                            className="users-button"
                            name="Show more"
                            type="button"
                            onClick={handleLoadMore}
                        />
                    )}
                </div>
            </section>
        </>
    );
};
