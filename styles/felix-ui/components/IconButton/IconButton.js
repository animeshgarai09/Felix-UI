import styles from './icon-button.module.scss'
import PropTypes from 'prop-types'

const IconButton = (
    {
        icon,                 // Icon component
        showBadge = false,    // Show badge on true
        badgeNumber,          // To show number inside badge
        ariaLabel,            // For accessability 
        onClick,
        className,
    }) => {

    const num = showBadge && (badgeNumber && parseInt(badgeNumber) >= 100 ? '99+' : badgeNumber)

    return (
        <button onClick={onClick} className={`${styles.container} ${className ? className : ''}`} aria-label={ariaLabel}>
            {showBadge && <span style={{ padding: num && '7px 5px' }} className={styles.badge}>{num}</span>}
            {icon}
        </button>
    )
}

IconButton.propTypes = {
    icon: PropTypes.func.isRequired,
    showBadge: PropTypes.bool,
    badgeNumber: PropTypes.number,
    ariaLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}
export default IconButton;
