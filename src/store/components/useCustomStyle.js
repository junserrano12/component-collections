const customStyleInitialState = {
    customStyle: {
        modal: null,
        lists: null
    }
}

const customStyleActions = {
    CUSTOM_MODAL_STYLE: (state, payload) => {
        return {
            ...state,
            customStyle: {
                ...state.customStyle,
                modal: payload.style
            }
        }
    },
    CUSTOM_LISTS_STYLE: (state, payload) => {
        return {
            ...state,
            customStyle: {
                ...state.customStyle,
                lists: payload.style
            }
        }
    }
}

export {customStyleInitialState, customStyleActions}