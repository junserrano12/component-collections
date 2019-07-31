import {useContext} from 'react'
import {DwhCollectionsStateContext, DwhCollectionsDispatchContext} from '../store/DwhCollectionsStore';

const useCustomStyle = () => {

    const state = useContext(DwhCollectionsStateContext)
    const dispatch = useContext(DwhCollectionsDispatchContext)

    const componentStyle = state.customStyle

    const customModalStyle = ( style ) => {
        dispatch({
            type: 'CUSTOM_MODAL_STYLE',
            payload: {
                style: style
            }
        })
    }

    return {
        componentStyle,
        customModalStyle
    }
}

export default useCustomStyle 