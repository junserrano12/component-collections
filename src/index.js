import React from 'react'
import Modal from './components/Modal/Modal'
import useModal from './components/Modal/useModal'
import {DwhCollectionsContext, DwhCollectionsProvider} from './context/DwhCollectionsContext'

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
  DwhCollectionsContext,
  DwhCollectionsProvider
}