import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddEventForm from "./AddEventForm";

const AddEventModal = (props) => {
    const {
        buttonLabel,
        className,
        eventStore,
        petStore,
        submitCallback
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button size="lg" color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Event</ModalHeader>
                <ModalBody>
                    <AddEventForm eventStore={eventStore} petStore={petStore} onSubmitCallback={() => {toggle(); submitCallback()}} />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default AddEventModal;