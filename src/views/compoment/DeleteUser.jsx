import React, { useEffect, useState } from 'react';
import { getCourts, getDeleteCourt } from './api'; // Assuming these functions are imported from an API file

const DeleteUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getCourts()
            .then((res) => {
                console.log(res.data.data);
                setCourts(res.data.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const DeleteUser = (id) => {
        getDeleteUser(id)
            .then(() => {
                const updatedUsers = users.filter(user => user.id !== id);
                setUsers(updatedUsers);
                console.log("Deleted user with id:", id);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h1>Delete User</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} <button onClick={() => DeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteUser;
