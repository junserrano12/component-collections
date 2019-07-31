const customStyleInitialState = {
    customStyle: {
        modal: null
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
    }
}

export {customStyleInitialState, customStyleActions}