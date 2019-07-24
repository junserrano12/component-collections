import React from 'react'
import DwhCollections, {Modal, useModal} from 'dwh-collections'

function TestComponent() {
  const {openModal, closeModal} = useModal()

  return (
    <div>
      <button onClick={() => openModal('modal1')}>Open Modal</button><br />
      <button onClick={() => openModal('modal2')}>Open Modal2</button><br /> 
      <button onClick={closeModal}>Close</button>
      <Modal name="modal1" header="header title">
        <p>My Modal Content</p>
        <button onClick={closeModal}>Close</button>
      </Modal>      
      <Modal name="modal2" header="header title">
        <p>My Modal Content 2</p>
        <button onClick={closeModal}>Close</button>
        </Modal>      
    </div>
  )
}

const App = () => {
  return (
    <DwhCollections>
      <TestComponent />
    </DwhCollections>
  )
}

export default App