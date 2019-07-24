import React from 'react'
import useModal from './useModal'
import style from './Modal.scss'

const Modal = ( {name, header, children, modalStyle = style} ) => {

    const {stopCloseModal, closeModal, modalState} = useModal()

    if (modalState.isOpen && name === modalState.name) {
        return (
            <div className={modalStyle.wrapper} onClick={closeModal}>
                <div className={modalStyle.container} onClick={stopCloseModal}>
                    <div className={modalStyle.header}>
                        {header}
                    </div>
                    <div className={modalStyle.content}>
                        {children} 
                    </div>
                </div> 
            </div>
        )
    } else {
        return null
    }   
}

export default Modal