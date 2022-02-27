import PropTypes from 'prop-types'
import styles from './button.module.scss'

const Button = (
    {
        size = "md", //'xs' || 'sm' || 'md' || 'lg', // md is by default
        theme = "primary", //'primary' || 'info' || 'warning' || 'success' || 'gray',|| disable, // primary is by default
        variant = "solid", //['round','outline','ghost','link'], // solid is by default
        leftIcon, // React-icons
        rightIcon, // React-icons
        transform = true, // Transform on hover
        className, //user-defined classnames
        children //button text
    }) => {

    // Creating class list for the component

    let classNames = [styles.btn, styles[size], styles[theme]]
    classNames = classNames.concat((typeof (variant) == 'string' ? [styles[variant]] || '' : variant.map((item) => styles[item])))
    classNames.push((leftIcon || rightIcon) && !children ? styles.icon : '')
    classNames.push(!transform && styles.noTransform)
    classNames.push(className)
    return (
        <button type='button' className={`${classNames.join(' ')}`}>
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
    className: PropTypes.string,
    children: PropTypes.node
}

export default Button
