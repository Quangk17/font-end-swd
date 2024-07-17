import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { getCourts, updateCourt, deleteCourt } from 'network/network';
import UpdateCourt from 'views/compoment/UpdateCourt';
import ViewCourt from 'views/compoment/ViewCourt';

const Courts = () => {
  const [courts, setCourts] = useState([]);
  const [showUpdateCourtForm, setShowUpdateCourtForm] = useState(false);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [showCourtForm, setShowCourtForm] = useState(false);

  useEffect(() => {
    fetchCourts();
  }, []);

  const fetchCourts = () => {
    getCourts()
      .then((res) => {
        setCourts(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateButtonClick = (court) => {
    setSelectedCourt(court);
    setShowUpdateCourtForm(true);
  };

  const handleViewButtonClick = (court) => {
    setSelectedCourt(court);
    setShowCourtForm(true);
  };

  const handleUpdateCourt = (updateCourt) => {
    updateCourt(updateCourt.id, updateCourt)
      .then(() => {
        setCourt((prevCourts) =>
          prevCourts.map((court) => (court.id === updateCourt.id ? updateCourt : court))
        );
        setShowUpdateCourtForm(false);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteButtonClick = (courtId) => {
    deleteCourt(courtId)
      .then(() => {
        const updatedCourts = courts.filter(updateCourt => updateCourt.id !== courtId);
        setCourts(updatedCourts);
        console.log("Deleted court with id:", courtId);
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <Row>
        <Col md={6} xl={8}>
          <Card className="Recent-Users widget-focus-lg">
            <Card.Header>
              <Card.Title as="h5">Show All Account</Card.Title>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              <Table responsive hover className="recent-users">
                <tbody>
                  {courts.map((court, index) => (
                    <tr key={index} className="unread">
                      <td>
                        <h6 className="mb-1">{court.name}</h6>
                        <p className="m-0">{court.description}</p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className={`fa fa-circle text-c-${court.statusColor} f-10 m-r-15`} />
                          {court.date}
                        </h6>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleUpdateButtonClick(court)}
                          className="label theme-bg2 text-white f-12"
                        >
                          Update
                        </Button>
                        <Button
                          onClick={() => handleDeleteButtonClick(court.id)}
                          className="label theme-bg text-white f-12">
                          Delete
                        </Button>
                        <Button
                          onClick={() => handleViewButtonClick(court)}
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
      {showUpdateCourtForm && <UpdateCourt court={selectedCourt} onUpdateCourt={handleUpdateCourt} />}
      {showCourtForm && <ViewCourt court={selectedCourt} />}
    </React.Fragment>
  );
};

export default Courts;
