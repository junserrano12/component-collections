import {useContext} from 'react'
import {DwhCollectionsContext} from '../../context/DwhCollectionsContext';

const useModal = () => {

    const [state, setState] = useContext(DwhCollectionsContext)
  
    const modalState = state.modal

    const openModal = (name) => {
        setState( state => ({
            ...state,
            modal: {
                name: name,
                isOpen: true
            }
        }) );
    }

    const closeModal = (event) => {
        if (event) event.preventDefault()  
        setState( state => ({
            ...state,
            modal: {
                name: '',
                isOpen: false
            }
        }))
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