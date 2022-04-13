import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './button.module.scss'
import classnames from 'classnames'

const Button = (
    {
        type = "button",            // Button type can be button or submit
        size = "md",                // 'xs' || 'sm' || 'md' || 'lg', // md is by default
        color = "primary",          // 'primary' || danger || 'info' || 'warning' || 'success' || 'gray'  // primary is by default
        variant = "solid",          // 'outline','ghost','link','disable' // solid is by default
        leftIcon,                   // React-icons
        rightIcon,                  // React-icons
        onClick,                    // function passed to component for onClick event
        isRound = false,            // Rounded button if true
        isWide = false,             // Full width if true
        isTransform = true,         // Transform on hover
        isLoading = false,          // loading animation
        isOnClickActive = false,    // Toggle active class if passes true 
        selected,                   // (ButtonGroup only) act as radio button for multiple button, sets active class
        className,                  // user-defined classnames
        children                    // button text
    }) => {

    /* State to check active sate if isOnClickActive is set true */
    const [active, setActive] = useState(false)

    const btnClick = () => {
        /* 
            If selected (radio type) is not set
            and isOnClickActive is set true
            then change button state to active based on click 
         */
        if (selected === undefined && isOnClickActive) {
            setActive(active => !active)
        }
        /* Trigger onClick function passed to the component*/
        onClick && onClick()
    }

    // Creating class list for the component
    const classNames = classnames(
        styles.btn,
        styles[size],
        styles[color],
        styles[variant],
        {
            [styles.icon]: (leftIcon || rightIcon) && !children,
            [styles.noTransform]: !isTransform,
            [styles.round]: isRound,
            [styles.wide]: isWide,
            [styles.active]: selected || active,
            [styles.disable]: isLoading,
        },
        className
    )
    return (
        <button type={type} role="button" className={classNames} onClick={btnClick}>
            {isLoading && <div className={styles.loader}></div>}
            {!isLoading && leftIcon}
            {!isLoading && children}
            {!isLoading && rightIcon}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    color: PropTypes.oneOf(['primary', 'danger', 'info', 'warning', 'success', 'gray']),
    variant: PropTypes.oneOf(['outline', 'ghost', 'link', 'disable']),
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
    isRound: PropTypes.bool,
    isWide: PropTypes.bool,
    isTransform: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    isOnClickActive: PropTypes.bool,
    selected: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Button
