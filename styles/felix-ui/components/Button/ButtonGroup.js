import PropTypes from 'prop-types'
import styles from './button.module.scss'
import { cloneElement } from 'react'
const ButtonGroup = (
    {
        size = "md",    //'xs' || 'sm' || 'md' || 'lg', // md is by default
        theme,          //'primary' ||'danger'|| 'info' || 'warning' || 'success' || 'gray',|| disable, // primary is by default
        outline = true, // Show outline if true
        isOnClickActive,  // Toggle active class if passes true 
        className,      // User-defined classnames
        children        // Button components
    }) => {

    // Creating class list for the component

    return (
        <div className={`${styles.group} ${styles[size]} ${styles[theme]} ${outline ? styles.outline : ''} ${className}`}>
            {children.map(Child => {
                if (isOnClickActive === true) {
                    /* If isOnClickActive true then pass down isOnClickActive prop to all button child*/
                    return cloneElement(Child, { isOnClickActive: isOnClickActive })
                } else {
                    return Child
                }
            })}
        </div>
    )
}

ButtonGroup.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    theme: PropTypes.oneOf(['primary', 'danger', 'info', 'warning', 'success', 'gray']),
    outline: PropTypes.bool,
    isOnClickActive: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node

}
export default ButtonGroup
