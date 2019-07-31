import {useContext} from 'react'
import {DwhCollectionsStateContext, DwhCollectionsDispatchContext} from '../../store/DwhCollectionsStore';

const useModal = () => {

    const state = useContext(DwhCollectionsStateContext)
    const dispatch = useContext(DwhCollectionsDispatchContext)

    const modalState = state.modal

    const openModal = (name) => {
        
        dispatch({
            type: 'OPEN_MODAL',
            payload: {
                name: name
            }
        })
    }

    const closeModal = (event) => {
        if (event) event.preventDefault()  
        dispatch({
            type: 'CLOSE_MODAL'
        })
    }

    const stopCloseModal = (event) => {
        event.stopPropagation()
    }

    return {
        openModal,
        closeModal,
        stopCloseModal,
        modalState
    }
}

export default useModal