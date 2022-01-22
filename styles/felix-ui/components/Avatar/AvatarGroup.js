import styles from './avatar.module.scss'
import Avatar from './Avatar'
const AvatarGroup = ({ options, className, children }) => {
    /* 
        options={
            size: 'xs' || 'sm' || 'md' || 'lg' || 'xl' || '2xl', // md is by default
            show: 5
            max: 100
        }
    */

    const { size = 'md', show, max } = options ? options : {}


    return (
        <div className={`${styles.group} ${styles[size]} ${className ? className : ''}`}>
            {children.slice(0, show)}
            <Avatar options={{
                num: max || (children.slice(show, children.length)).length,
                // src: '/images/100200.jpeg',
            }} />
        </div>
    )

}

export default AvatarGroup