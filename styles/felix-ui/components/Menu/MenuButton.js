import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton";
import { forwardRef } from "react"
import PropTypes from "prop-types";

const MenuButton = forwardRef((
    {
        as = "Button",              // Render menu button as Button or IconButton
        size = "md",                // 'xs' || 'sm' || 'md' || 'lg', // md is by default
        color = "primary",          // 'primary' || danger || 'info' || 'warning' || 'success' || 'gray'  // primary is by default
        variant,                    // 'outline','ghost','link','disable' // solid is by default
        leftIcon,                   // React-icons
        rightIcon,                  // React-icons
        isRound = false,            // Rounded button if true
        isWide = false,             // Full width if true
        className,                  // user-defined classnames
        children,                   // Button text

        icon,
        showBadge = false,          // Show badge on true
        badgeNumber,                // To show number inside badge
        ariaLabel,                  // For accessability 

        menuState,                  // Menu list state true || false
        menuToggle,                 // function to open close menu
        updatePopper
    }, ref) => {

    const buttonProps = { size, color, variant, leftIcon, rightIcon, isRound, isWide, className, children, ref }
    const iconButtonProps = { icon, showBadge, badgeNumber, ariaLabel, className, ref }
    return (
        <>
            {as === "IconButton"
                ? <IconButton {...iconButtonProps} onClick={() => { menuToggle(); updatePopper(); }} />
                : <Button {...buttonProps} isTransform={false} onClick={() => { menuToggle(); updatePopper(); }}>{children}</Button>
            }
        </>
    )
})

MenuButton.displayName = "MenuButton"

MenuButton.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    color: PropTypes.oneOf(['primary', 'danger', 'info', 'warning', 'success', 'gray']),
    variant: PropTypes.oneOf(['outline', 'ghost', 'link', 'disable']),
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
    isRound: PropTypes.bool,
    isWide: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,

    icon: PropTypes.node.isRequired,
    showBadge: PropTypes.bool,
    badgeNumber: PropTypes.number,
    ariaLabel: PropTypes.string,

    menuState: PropTypes.bool,
    menuToggle: PropTypes.func
}
export default MenuButton