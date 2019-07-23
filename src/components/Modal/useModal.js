import React from 'react'
import PropTypes from 'prop-types'

const useModal = () => {

    const openModal = (name) => {
        console.log('open Modal')
    }

    const closeModal = (event) => {
        console.log('close modal')
    }

    const stopCloseModal = (event) => {
        event.stopPropagation()
    }

    return {
        openModal,
        closeModal,
        stopCloseModal
    }
}

export default useModal
