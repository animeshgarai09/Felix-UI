import { cloneElement, useState } from "react"
import { usePopper } from 'react-popper';
import PropTypes from "prop-types";

const Menu = (
    {
        children,
        menuPlacement = "bottom-start",  // popper input for menu position
        isLazy = false,                   // if true MenuList will mount on MenuState true else MenuList will be rendered in DOM 
        offset = [0, 15]
    }) => {
    const [menuState, setMenuState] = useState(false)
    const [menuButtonElement, setMenuButtonElement] = useState(null);
    const [menuListElement, setMenuListElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles: { popper: popperStyles },
        attributes: { popper: popperAttributes }, update } = usePopper(
            menuButtonElement,
            menuListElement, {
            placement: menuPlacement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset,
                    },
                },
                {
                    name: "arrow",
                    options: {
                        element: arrowElement,
                        // padding: 5,
                    }
                }
            ],
        });
    return (
        <>
            {children.map((child, i) => {
                const displayName = child.type.displayName

                if (displayName === "MenuButton") {
                    return cloneElement(child, {
                        menuState,
                        menuToggle: () => setMenuState(prev => !prev),
                        updatePopper: async () => await update(),
                        ref: setMenuButtonElement,
                        key: i
                    })
                } else if (
                    (isLazy && menuState && displayName === "MenuList")
                    || (!isLazy && displayName === "MenuList")) {
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

const isValidChild = (props, propName, componentName) => {
    if (!Array.isArray(props)) {
        return new Error(`Invalid children provided. Expected only "MenuButton" and "MenuList" component as a direct children of ${componentName} component.`)
    } else {
        if (!props[propName].type.displayName || !["MenuButton", "MenuList"].includes(props[propName].type.displayName)) {
            return new Error(`Invalid children provided. Expected only "MenuButton" and "MenuList" component as a direct children of ${componentName} component.`)
        }
    }
}

Menu.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(isValidChild),
        // isValidChild
    ]).isRequired,
    menuPlacement: PropTypes.oneOf([
        "auto",
        "auto-start",
        "auto-end",
        "top",
        "top-start",
        "top-bottom",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end",
    ]),
    isLazy: PropTypes.bool,
    offset: PropTypes.arrayOf(PropTypes.number)
}

export default Menu