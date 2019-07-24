import {useContext} from 'react'
import {DwhCollectionsContext} from '../../context/DwhCollectionsContext';

const useModal = () => {

    const [state, setState] = useContext(DwhCollectionsContext)    

    console.log(state)

    const modalState = state.modal

    const openModal = (name) => {
        console.log(name)
        console.log(state)
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