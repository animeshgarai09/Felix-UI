import PropTypes from "prop-types";

const MenuItem = (
    {
        onClick,
        closeMenu,
        leftIcon,
        rightIcon,
        className,
        children
    }) => {

    const output = {
        display: "grid",
        gap: ".5rem",
    }
    if (leftIcon && rightIcon) {
        output.gridTemplateColumns = "1.2rem 1fr 1.2rem"
    } else if (leftIcon) {
        output.gridTemplateColumns = "1.2rem 1fr"
    } else if (rightIcon) {
        output.gridTemplateColumns = "1fr 1.2rem"
    }
    return (
        <li style={output} className={className} onClick={() => { onClick && onClick(); closeMenu(); }}>
            {leftIcon}
            {children}
            {rightIcon}
        </li>
    )
}
MenuItem.displayName = "MenuItem"

MenuItem.propTypes = {
    onClick: PropTypes.func,
    closeMenu: PropTypes.func,
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
    className: PropTypes.string,
    children: PropTypes.node
}


export default MenuItem