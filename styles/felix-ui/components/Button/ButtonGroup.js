import PropTypes from 'prop-types'
import styles from './button.module.scss'

const ButtonGroup = (
    {
        size = "md", //'xs' || 'sm' || 'md' || 'lg', // md is by default
        theme, //'primary' || 'info' || 'warning' || 'success' || 'gray',|| disable, // primary is by default
        outline = true,
        className, //user-defined classnames
        children //button text
    }) => {

    // Creating class list for the component

    return (
        <div className={`${styles.group} ${styles[size]} ${styles[theme]} ${outline ? styles.outline : ''} ${className}`}>
            {children}
        </div>
    )
}

ButtonGroup.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    theme: PropTypes.oneOf(['primary', 'info', 'warning', 'success', 'gray']),
    outline: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node

}
export default ButtonGroup
