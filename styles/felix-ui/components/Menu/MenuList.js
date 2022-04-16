import { cloneElement, forwardRef, useRef, useEffect } from "react"
import { useOnClickOutside } from "../Hooks/useOnClickOutside"
import styles from "./menu.module.scss"
import classnames from 'classnames'
import PropTypes from "prop-types";

const MenuList = forwardRef((
    {
        className,          // User defined className
        children,           // MenuItem children
        menuState,          // Menu state true || false
        closeMenu,          // Close menu function
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

    const classNames = classnames(
        className,
        styles.container, {
        [styles.open]: menuState
    })

    return (
        <div ref={menuListRef} className={classNames} style={popperStyles} {...popperAttributes}>
            <div ref={setArrowElement} className={styles.arrow}></div>
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

MenuList.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    menuState: PropTypes.bool,
    closeMenu: PropTypes.func,
    popperStyles: PropTypes.object,
    popperAttributes: PropTypes.object
}

export default MenuList