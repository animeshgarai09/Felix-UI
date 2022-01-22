import styles from './badge.module.scss'

const Badge = ({ options, children, className }) => {
    /*
        options={
            color: green || red || gray || yellow || primary,
            variant: [outlined,rounded],
        }
    */
    let { color, variant = ' ' } = options ? options : {}
    return (
        <span className={`
        ${styles.container} 
        ${styles[color] ? styles[color] : ''} 
        ${typeof (variant) == 'string' ? styles[variant] : (variant.map((item) => styles[item])).join(' ')}
        ${className ? className : ''}`}>
            {children}
        </span>
    )
}

export default Badge;
