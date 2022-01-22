import styles from './button.module.scss'

const Button = ({ options, className, children }) => {
    /*
        options:{
            size:'xs' || 'sm' || 'md' || 'lg', // md is by default
            theme: 'primary' || 'info' || 'warning' || 'success' || disable, // primary is by default
            variant: ['rounded','outline','ghost','link'], // solid is by default
            icon: icon,
            direction: 'left' || 'right',
            className: 'class'
        }
    */
    let { icon = null, size = 'md', theme = 'primary', variant = 'solid', direction = "left" } = options ? options : {}

    return (
        <button className={`
            ${styles.btn} 
            ${styles[size]} 
            ${styles[theme]} 
            ${typeof (variant) == 'string' ? styles[variant] : (variant.map((item) => styles[item])).join(' ')} 
            ${styles[direction]}       
            ${icon && !children ? styles.icon : ''}
            ${className ? className : ''}
            `}
        >
            {icon}
            {children}
        </button>
    )
}

export default Button
