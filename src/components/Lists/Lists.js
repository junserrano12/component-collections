import React from 'react'
import PropTypes from 'prop-types'
import style from './Lists.scss'

const renderChildren = (children) => {
    return React.Children.map(children, child => {
        if (child.type === List)
            return child
        else
            return null
    })
}

const List = ({classes=[], children}) => {

    let contentStyle = `${style.content}`

    classes.map( (classNames) => {
        contentStyle += ` ${classNames}`
    })

    return (
        <li className={contentStyle}>
            {children}
        </li>
    )
}

const Lists = ({children, type='default', classes=[]}) => {
    
    let containerStyle = `${style.container} ${type}`

    classes.map(classNames => {
        containerStyle += ` ${classNames}`
    })

    return (
        <ul className={containerStyle}>
            {renderChildren(children)}
        </ul>
    )
}

Lists.propTypes = {
    type: PropTypes.string,
    classes: PropTypes.array
}

List.propTypes = {
    keyName: PropTypes.string,
    classes: PropTypes.array
}

export default Lists

export {List}