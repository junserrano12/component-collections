import React from 'react'
import Modal from './components/Modal/Modal'
import useModal from './components/Modal/useModal'
import useCustomStyle from './hooks/useCustomStyle'
import {DwhCollectionsProvider} from './store/DwhCollectionsStore'
import './assets/sass/base.scss'

const DwhCollections = (props) => {
    return (
        <DwhCollectionsProvider>
            {props.children}
        </DwhCollectionsProvider>
    )
}

export {
    Modal,
    useModal,
    useCustomStyle
}

export default DwhCollections
