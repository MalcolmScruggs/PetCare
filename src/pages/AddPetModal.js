import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddPetForm from "./AddPetForm";

const AddPetModal = (props) => {
    const {
        buttonLabel,
        buttonColor,
        className,
        modalHeader,
        petStore,
        petToEdit
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color={buttonColor || "primary"} onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>
                <ModalBody>
                    <AddPetForm petStore={petStore} onSubmitCallback={toggle} petToEdit={petToEdit}/>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default AddPetModal;