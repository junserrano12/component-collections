const modalInitialState = {
    modal: {
        name: '',
        isOpen: null
    }
}

const modalActions = {
    OPEN_MODAL: (state, payload) => {
        return {
            ...state,
            modal: {
                ...state.modal,
                name: payload.name,
                isOpen: true
            }
        }
    },
    CLOSE_MODAL: (state) => {
        return {
            ...state, 
            modal: {
                ...state.modal,
                isOpen: false
            }
        }
    }
}

export {modalInitialState, modalActions}