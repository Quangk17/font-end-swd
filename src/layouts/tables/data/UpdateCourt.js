/* eslint-disable */
import React, { useState } from 'react';
import { getUpdateCourt } from 'network/network';
import FormUpdateCourt from '../compoments/FormUpdateCourt';

const UpdateCourt = (id) => {
    const [courts, setCourts] = useState([]);
    const [selectedCourt, setSelectedCourt] = useState(null);

    const handleUpdate = (id) => {
        getUpdateCourt(id).then(() => {
            const updatedCourts = courts.filter((court) => court.id !== id);
            setCourts(updatedCourts);
            const court = courts.find((court) => court.id === id);
            setSelectedCourt(court);
        });

        console.log('update', id);
    };

    return (
        <div>
            <button onClick={() => handleUpdate(id)}>Update Court</button>
            {selectedCourt && (
                <FormUpdateCourt
                    id={selectedCourt.id}
                    name={selectedCourt.name}
                    storeID={selectedCourt.storeID}
                    slotID={selectedCourt.slotID}
                    onClick={() => console.log('Form submitted')}
                />
            )}
        </div>
    );
};

export default UpdateCourt;
