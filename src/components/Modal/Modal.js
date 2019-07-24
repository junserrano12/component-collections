import React from 'react'
import useModal from './useModal'
import useCustomStyle from '../../hooks/useCustomStyle'
import style from './Modal.scss'

const Modal = ( {name, header, children} ) => {

    const {stopCloseModal, closeModal, modalState} = useModal()
    const {componentStyle} = useCustomStyle()

    let modalStyle = ( componentStyle.modal !== null ) ? componentStyle.modal : style

    if (modalState.isOpen && name === modalState.name) {
        return (
            <div className={modalStyle.wrapper} onClick={closeModal}>
                <div className={modalStyle.container} onClick={stopCloseModal}>
                    { (header) ? 
                    <div className={modalStyle.header}>
                        {header}
                    </div> : null }
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