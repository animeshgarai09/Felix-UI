import styles from './avatar.module.scss'
import Avatar from './Avatar'
import PropTypes from 'prop-types'

const AvatarGroup = (
    {
        size = 'md',      // 'xs' || 'sm' || 'md' || 'lg' || 'xl' || '2xl', // md is by default 
        show,           // Visible number of avatar from passed children list
        max,            // maximum number shown for the group
        className,
        children
    }) => {

    return (
        <div className={`${styles.group} ${styles[size]} ${className ? className : ''}`}>
            {children.slice(0, show)}
            <Avatar num={max || (children.slice(show, children.length)).length} />
        </div>
    )

}
AvatarGroup.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
    show: PropTypes.number,
    max: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node
}
export default AvatarGroup