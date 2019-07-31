import React, {createContext, useReducer} from 'react';
import {modalInitialState, modalActions} from './components/modal'
import {customStyleInitialState, customStyleActions} from './components/useCustomStyle'

const DwhCollectionsStateContext = createContext();
const DwhCollectionsDispatchContext = createContext();

const initialState = {
    ...modalInitialState,
    ...customStyleInitialState
}

const Actions = {
    ...modalActions,
    ...customStyleActions
}

const DwhCollectionsReducer = (state, action) => {
    const act = Actions[action.type]
    const update = act( state, action.payload)
    return {...state, ...update}
}

const DwhCollectionsProvider = (props) => {
    const [state, dispatch] = useReducer(DwhCollectionsReducer, initialState)

    return (
        <DwhCollectionsDispatchContext.Provider value={dispatch}>
            <DwhCollectionsStateContext.Provider value={state}>
                {props.children}
            </DwhCollectionsStateContext.Provider>
        </DwhCollectionsDispatchContext.Provider>
    );
}

export { DwhCollectionsDispatchContext, DwhCollectionsStateContext, DwhCollectionsProvider }