import styles from './icon-badge.module.scss'

const IconBadge = ({ options, className }) => {
    /*
        options={
            icon: icon,
            number: int
        }
    */
    const { icon, color, number } = options ? options : {}
    let num = number && parseInt(number) >= 100 ? '99+' : number
    return (
        <span className={`${styles.container} ${className ? className : ''}`}>
            <span style={{ padding: num && '7px 5px' }} className={styles.badge}>{num}</span>
            {icon}
        </span>
    )
}

export default IconBadge;
