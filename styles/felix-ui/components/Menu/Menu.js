import styles from "./menu.module.scss"
import { cloneElement, forwardRef, useRef, useEffect, useState } from "react"
import { useOnClickOutside } from "../Hooks/useOnClickOutside"
import { usePopper } from 'react-popper';
import Button from "../Button/Button"

const Menu = ({ children }) => {
    const [menuState, setMenuState] = useState(false)
    const [menuButtonElement, setMenuButtonElement] = useState(null);
    const [menuListElement, setMenuListElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles: { popper: popperStyles },
        attributes: { popper: popperAttributes } } = usePopper(
            menuButtonElement,
            menuListElement, {
            placement: "bottom-start",
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 15],
                    },
                },
                {
                    name: styles.arrow,
                    options: {
                        element: arrowElement,
                        padding: 5,
                    }
                }
            ],
        });
    return (

        <>
            {/* {console.log(children)} */}
            {children.map((child, i) => {
                const displayName = child.type.displayName

                if (displayName === "MenuButton") {
                    return cloneElement(child, {
                        menuState,
                        menuToggle: () => setMenuState(prev => !prev),
                        ref: setMenuButtonElement,
                        key: i
                    })
                } else if (displayName === "MenuList") {
                    return cloneElement(child, {
                        menuState,
                        closeMenu: () => setMenuState(false),
                        ref: { menuButtonElement, setMenuListElement, setArrowElement },
                        popperStyles,
                        popperAttributes,
                        key: i
                    })
                }
            })}
        </>
    )
}

Menu.displayName = "Menu"

const MenuButton = forwardRef((
    {
        size = "md",                // 'xs' || 'sm' || 'md' || 'lg', // md is by default
        color = "primary",          // 'primary' || danger || 'info' || 'warning' || 'success' || 'gray'  // primary is by default
        variant,                    // 'outline','ghost','link','disable' // solid is by default
        leftIcon,                   // React-icons
        rightIcon,                  // React-icons
        isRound = false,            // Rounded button if true
        isWide = false,             // Full width if true
        className,                  // user-defined classnames
        children,                   // Button text
        menuState,                  // Menu list state true || false
        menuToggle,                 // function to open close menu
    }, ref) => {

    const props = { size, color, variant, leftIcon, rightIcon, isRound, isWide, className, children, ref }
    return (
        <Button {...props} isTransform={false} onClick={menuToggle}>{children}</Button>
    )
})

MenuButton.displayName = "MenuButton"


const MenuList = forwardRef((
    {
        className,
        children,
        menuState,
        closeMenu,
        popperStyles,
        popperAttributes
    }, ref) => {

    const { menuButtonElement, setMenuListElement, setArrowElement } = ref
    const menuListRef = useRef()
    const dropdownRef = useOnClickOutside({ handler: closeMenu, elements: [menuButtonElement] })

    useEffect(() => {
        dropdownRef.current = menuListRef.current
        setMenuListElement(menuListRef.current)
    }, [menuListRef.current])
    return (
        <div ref={menuListRef} className={`${className} ${styles.container} ${menuState ? styles.open : ''} `} style={popperStyles} {...popperAttributes}>
            <div ref={setArrowElement} className={`${styles.arrow} popper__arrow`}></div>
            <ul>
                {children.map((child, i) => {
                    if (child.type.displayName === "MenuItem")
                        return cloneElement(child, { closeMenu, key: i })
                })}
            </ul>
        </div>

    )
})

MenuList.displayName = "MenuList"

const MenuItem = (
    {
        onClick,
        closeMenu,
        className,
        children }) => {
    return (
        <li className={className} onClick={() => { onClick && onClick(); closeMenu(); }}>{children}</li>
    )
}
MenuItem.displayName = "MenuItem"

export { Menu, MenuButton, MenuList, MenuItem }