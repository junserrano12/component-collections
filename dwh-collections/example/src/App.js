import React from 'react'
import DwhCollections, {Modal, useModal} from 'dwh-collections'

const App = () => {

  const {openModal} = useModal()

  return (
    <div>
      <DwhCollections text='Modern React component module' />

      <button onClick={() => openModal('modal1')}>Open Modal</button>
      <Modal name="modal1" header="header title">
        <p>My Modal Content</p>
      </Modal>
      
    </div>
  )
}


export default App