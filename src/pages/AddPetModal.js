import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddPetForm from "./AddPetForm";

const AddPetModal = (props) => {
    const {
        buttonLabel,
        className,
        petStore,
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Pet</ModalHeader>
                <ModalBody>
                    <AddPetForm petStore={petStore} onSubmitCallback={toggle} />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default AddPetModal;