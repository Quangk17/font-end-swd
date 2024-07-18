import React, { useState } from 'react';
import NavSearch from '.';
import ViewUser from 'views/compoment/ViewUser';

const UserSearch = () => {
    const [user, setUser] = useState(null);

    const handleSearch = (searchResult) => {
        if (searchResult.length > 0) {
            setUser(searchResult[0]); // Assuming the API returns an array of users and we take the first match
        } else {
            setUser(null);
        }
    };

    return (
        <div>
            <NavSearch windowWidth={window.innerWidth} onSearch={handleSearch} />
            {user && <ViewUser user={user} />}
        </div>
    );
};

export default UserSearch;
