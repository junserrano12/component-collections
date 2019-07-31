import React, {useEffect} from 'react'
import DwhCollections, {Modal, useModal, useCustomStyle} from 'dwh-collections'
import appStyle from './App.module.css'
import modalStyle from './modal.module.scss'

function TestComponent() {
    const {openModal, closeModal} = useModal()
    const {customModalStyle} = useCustomStyle()
    
    useEffect(() => {
        customModalStyle(modalStyle)
    }, [])

    return (
        <div className={appStyle.App}>
            <button onClick={() => openModal('modal1')}>Open</button>
            <Modal name="modal1">
                <p>My Modal Content</p>
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