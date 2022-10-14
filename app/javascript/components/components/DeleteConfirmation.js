import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink } from 'react-router-dom'


const DeleteConfirmation = ({ handleDelete }) => {
   const [showModal, setShowModal] = useState(false);

   const toggle = () => {
      setShowModal(!showModal)
   }

   return (
      <div>
         <Button
            name="submit"
            onClick={toggle}
         >
            Delete Song
         </Button>
         <Modal toggle={toggle} isOpen={showModal}>
            <ModalHeader className='m-auto'>Delete Confirmation</ModalHeader>
            <ModalBody style={{
               color: "black",
               textAlign: "center"
            }}>
               Are you sure you want to delete this song?
            </ModalBody>
            <ModalFooter>
               <NavLink to="/songcontributions" className="nav-link">
                  <Button
                     onClick={handleDelete}
                     color='danger'
                  >
                     Delete
                  </Button>{' '}
               </NavLink>
               <Button onClick={toggle} >
                  Cancel
               </Button>
            </ModalFooter>
         </Modal>
      </div>
   );
}

export default DeleteConfirmation;
