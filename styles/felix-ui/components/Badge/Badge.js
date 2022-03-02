import styles from './badge.module.scss'
import PropTypes from 'prop-types'

const Badge = (
    {
        color = 'primary', // green || red || gray || yellow || primary 
        variant,           // [outline,round] Default is solid
        className,
        children
    }) => {

    console.log(variant)
    return (
        <span className={`
        ${styles.container} 
        ${styles[color] ? styles[color] : ''} 
        ${variant && (typeof (variant) === 'string' ? styles[variant] : (variant.map((item) => styles[item])).join(' '))}
        ${className ? className : ''}`}
        >
            {children}
        </span>
    )
}

Badge.propTypes = {
    color: PropTypes.oneOf(['green', 'red', 'yellow', 'gray', 'primary']),
    variant: PropTypes.oneOfType([
        PropTypes.oneOf(['outline', 'round']),
        PropTypes.arrayOf(PropTypes.oneOf(['outline', 'round']))
    ]),
    className: PropTypes.string,
    children: PropTypes.node
}
export default Badge;
