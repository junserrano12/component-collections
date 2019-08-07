import React, {useEffect} from 'react'
import DwhCollections, {Lists, List, Modal, useModal, useCustomStyle} from 'dwh-collections'
import appStyle from './App.module.css'
import modalStyle from './modal.module.scss'

const ModalComponent = () => {
    const {openModal, closeModal} = useModal()
    const {customModalStyle} = useCustomStyle()
    
    useEffect(() => {
        customModalStyle(modalStyle)
    }, [customModalStyle])

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

const ListComponent = () => {
    let rooms = [
                    {id: '001', name: 'Deluxe', price: 1999},
                    {id: '002', name: 'Twin', price: 2999},
                    {id: '003', name: 'Primier', price: 3999},
                    {id: '004', name: 'Master', price: 4999}
                ]

    return (
        <div className="list-container">
            <Lists type="bullet">
                {rooms.map(room => (
                    <List key={room.id}>
                        <p>{room.name} - <span>{room.price}</span></p>
                    </List>
                ))}
            </Lists>  
        </div>
    )
}

const App = () => {

    return (
        <DwhCollections>
            <ListComponent />
            <ModalComponent />
        </DwhCollections>
    )
}

export default App