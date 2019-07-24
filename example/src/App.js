import React from 'react'
import {Modal, useModal, DwhCollectionsProvider} from 'dwh-collections'

const App = () => {

  const {openModal, closeModal} = useModal()

  return (
      <DwhCollectionsProvider>
        <button onClick={() => openModal('modal1')}>Open Modal</button>
        <button onClick={closeModal}>Close</button>
        <Modal name="modal1" header="header title">
          <p>My Modal Content</p>
          <button onClick={closeModal}>Close</button>
        </Modal>      
      </DwhCollectionsProvider>
  )
}

export default App