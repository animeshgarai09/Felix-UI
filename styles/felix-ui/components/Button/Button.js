import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './button.module.scss'
const Button = (
    {
        size = "md", //'xs' || 'sm' || 'md' || 'lg', // md is by default
        theme = "primary", //'primary' || 'info' || 'warning' || 'success' || 'gray',|| disable, // primary is by default
        variant = "solid", //['round','outline','ghost','link'], // solid is by default
        leftIcon, // React-icons
        rightIcon, // React-icons
        transform = true, // Transform on hover
        onClick, // function passed to component for onClick event
        onClickActive = false, //Toggle active class if passes true 
        selected, // (ButtonGroup only) act as radio button for multiple button, sets active class
        className, //user-defined classnames
        children //button text
    }) => {

    /* State to check active sate if onClickActive is set true */
    const [active, setActive] = useState(false)

    const btnClick = () => {
        /* 
            If selected (radio type) is not set
            and onClickActive is set true
            then change button state to active based on click 
         */
        if (selected === undefined && onClickActive) {
            setActive(active => !active)
        }
        /* Trigger onClick function passed to the component*/
        onClick && onClick()
    }
    // Creating class list for the component

    let classNames = [styles.btn, styles[size], styles[theme]]
    classNames = classNames.concat((typeof (variant) == 'string' ? [styles[variant]] || '' : variant.map((item) => styles[item])))
    classNames.push((leftIcon || rightIcon) && !children ? styles.icon : '')
    classNames.push(!transform && styles.noTransform)
    classNames.push(selected && styles.active)
    classNames.push(active && styles.active)
    classNames.push(className)
    return (
        <button type='button' className={`${classNames.join(' ')}`} onClick={btnClick}>
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    theme: PropTypes.oneOf(['primary', 'info', 'warning', 'success', 'gray', 'disable']),
    variant: PropTypes.oneOfType([
        PropTypes.oneOf(['round', 'outline', 'ghost', 'link']),
        PropTypes.arrayOf(PropTypes.oneOf(['round', 'outline', 'ghost', 'link']))
    ]),
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
    transform: PropTypes.bool,
    onClick: PropTypes.func,
    onClickActive: PropTypes.bool,
    selected: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Button
