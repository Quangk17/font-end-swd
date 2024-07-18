import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { getUsers, updateUser, deleteUser, searchUser } from 'network/network';
import UpdateUser from 'views/compoment/UpdateUser';
import SearchUser from 'views/compoment/SearchUser';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showUpdateUserForm, setShowUpdateUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers()
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateButtonClick = (user) => {
    setSelectedUser(user);
    setShowUpdateUserForm(true);
  };

  const handleViewButtonClick = (user) => {
    setSelectedUser(user);
    setShowUserForm(true);
  };

  const handleUpdateUser = (updatedUser) => {
    updateUser(updatedUser.id, updatedUser)
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
        setShowUpdateUserForm(false);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteButtonClick = (userId) => {
    deleteUser(userId)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        console.log("Deleted user with id:", userId);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = () => {
    searchUser(searchTerm)
      .then((res) => {
        if (res.data && res.data.data) {
          setSelectedUser(res.data.data);
          setShowUserForm(true);
          console.log("Search result:", res.data.data);
        } else {
          setSelectedUser(null);
          setShowUserForm(false);
          console.log("No user found with the given search term.");
        }
      })
      .catch((error) => {
        console.log(error);
        setSelectedUser(null);
        setShowUserForm(false);
      });
  };

  return (
    <React.Fragment>
      <Row>
        <Col md={6} xl={8}>
          <Card className="Recent-Users widget-focus-lg">
            <Card.Header>
              <h5 style={{ paddingRight: 300 }}>Show All Accounts</h5>
              <input
                type="text"
                placeholder="Enter search term..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              <Table responsive hover className="recent-users">
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="unread">
                      <td>
                        <h6 className="mb-1">{user.name}</h6>
                        <p className="m-0">{user.description}</p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className={`fa fa-circle text-c-${user.statusColor} f-10 m-r-15`} />
                          {user.date}
                        </h6>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleUpdateButtonClick(user)}
                          className="label theme-bg2 text-white f-12"
                        >
                          Update
                        </Button>
                        <Button
                          onClick={() => handleDeleteButtonClick(user.id)}
                          className="label theme-bg text-white f-12">
                          Delete
                        </Button>
                        <Button
                          onClick={() => handleViewButtonClick(user)}
                          className="label theme-bg text-white f-12">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {showUpdateUserForm && selectedUser && (
        <UpdateUser user={selectedUser} onUpdateUser={handleUpdateUser} />
      )}
      {showUserForm && selectedUser && (
        <SearchUser user={selectedUser} />
      )}
    </React.Fragment>
  );
};

export default Users;
