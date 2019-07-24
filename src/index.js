import React from 'react'
import Modal from './components/Modal/Modal'
import useModal from './components/Modal/useModal'
import {DwhCollectionsProvider} from './context/DwhCollectionsContext'

const DwhCollections = (props) => {
    return (
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
}

export default DwhCollections

export {
  Modal,
  useModal,
  DwhCollectionsProvider
}