import styles from "./list.module.scss"
import PropTypes from 'prop-types'
import classnames from 'classnames'

const List = (
    {
        type = "ul",    // "ol" || "ul" for ordered and unordered list
        style = "disc",          // "none"||"disc"||"square"||"circle"||"number"||"lowerLetter"||"upperLetter" List styles
        orientation,    // "horizontal" for inline list
        className,      // user defined class name
        children        // ListItems for the list
    }
) => {

    const classNames = classnames(
        styles.list,
        styles[orientation],
        styles['style-' + style],
        className
    )
    return (
        <>
            {type == 'ul' &&
                <ul className={classNames} role="list">
                    {children}
                </ul>
            }
            {type == 'ol' &&
                <ol className={classNames} role="list" >
                    {children}
                </ol>
            }
        </>
    )
}

const ListItem = ({ className, children }) => {
    return (
        <li className={className}>{children}</li>
    )
}


List.propTypes = {
    type: PropTypes.oneOf(["ol", "ul"]),
    style: PropTypes.oneOf(["none", "disc", "square", "circle", "number", "lowerLetter", "upperLetter"]),
    orientation: PropTypes.oneOf(["horizontal"]),
    className: PropTypes.string,
    children: PropTypes.node
}

ListItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export { List, ListItem }