import {useContext} from 'react'
import {DwhCollectionsContext} from '../../context/DwhCollectionsContext';

const useModal = () => {

    // const [state, setState] = useContext(DwhCollectionsContext)    

    let state = {
        modal: {
            name: '',
            isOpen: false
        }
    }

    const modalState = state.modal

    const openModal = (name) => {
        console.log(name)
        // setState( state => ({
        //     ...state,
        //     modal: {
        //         name: name,
        //         isOpen: true
        //     }
        // }) )
    }

    const closeModal = (event) => {
        console.log('close')
        // if (event) event.preventDefault()  
        // setState( state => ({
        //     ...state,
        //     modal: {
        //         isOpen: false
        //     }
        // }))
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
