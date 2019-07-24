import {useContext} from 'react'
import {DwhCollectionsContext} from '../context/DwhCollectionsContext';

const useCustomStyle = () => {

    const [state, setState] = useContext(DwhCollectionsContext)

    const componentStyle = state.style

    const customModalStyle = ( style ) => {
        setState( state => ({
            ...state,
            style: {
                modal: style
            }
        }) );
    }

    return {
        componentStyle,
        customModalStyle
    }
}

export default useCustomStyle 