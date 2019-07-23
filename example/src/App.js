import React from 'react'
import {Modal, useModal} from 'dwh-collections'

const App = () => {

  const {openModal, closeModal} = useModal()

  return (
    <div>
      <button onClick={() => openModal('modal1')}>Open Modal</button>
      <Modal name="modal1" header="header title">
        <p>My Modal Content</p>
        <button onClick={closeModal}>Close</button>
      </Modal>      
    </div>
  )
}

export default App