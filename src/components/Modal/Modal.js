import React from 'react'
import useModal from './useModal'
import style from './Modal.scss'

const Modal = ( {name, header, children} ) => {

    const {stopCloseModal, closeModal, modalState} = useModal()

    if (modalState.isOpen && name === modalState.name) {
        return (
            <div className={style.wrapper} onClick={closeModal}>
                <div className={style.container} onClick={stopCloseModal}>
                    <div className={style.header}>
                        {header}
                    </div>
                    <div className={style.content}>
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