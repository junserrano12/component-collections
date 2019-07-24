import React from 'react'
import Modal from './components/Modal/Modal'
import useModal from './components/Modal/useModal'
import useCustomStyle from './hooks/useCustomStyle'
import {DwhCollectionsContext, DwhCollectionsProvider} from './context/DwhCollectionsContext'
import './assets/sass/base.scss'

const DwhCollections = (props) => {
    return (
      <DwhCollectionsProvider>
        {props.children}
      </DwhCollectionsProvider>
    )
}

export default DwhCollections

export {
  Modal,
  useModal,
  useCustomStyle,
  DwhCollectionsContext,
  DwhCollectionsProvider
}