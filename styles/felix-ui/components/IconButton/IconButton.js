import styles from './icon-button.module.scss'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const IconButton = forwardRef((
    {
        icon,                 // Icon component
        showBadge = false,    // Show badge on true
        badgeNumber,          // To show number inside badge
        ariaLabel,            // For accessability 
        onClick,
        className,
    }, ref) => {

    const num = showBadge && (badgeNumber && parseInt(badgeNumber) >= 100 ? '99+' : badgeNumber)

    return (
        <button ref={ref} onClick={onClick} className={`${styles.container} ${className ? className : ''}`} aria-label={ariaLabel}>
            {showBadge && <span style={{ padding: num && '7px 5px' }} className={styles.badge}>{num}</span>}
            {icon}
        </button>
    )
})

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    showBadge: PropTypes.bool,
    badgeNumber: PropTypes.number,
    ariaLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}
export default IconButton;
