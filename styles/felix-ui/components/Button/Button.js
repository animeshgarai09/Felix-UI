import styles from './button.module.scss'

const Button = (
    {
        size = "md", //'xs' || 'sm' || 'md' || 'lg', // md is by default
        theme = "primary", //'primary' || 'info' || 'warning' || 'success' || disable, // primary is by default
        variant = "solid", //['round','outline','ghost','link'], // solid is by default
        leftIcon, // React-icons
        rightIcon, // React-icons
        className, //user-defined classnames
        children //button text
    }) => {

    // Creating class list for the component

    let classNames = [styles.btn, styles[size], styles[theme]]
    classNames = classNames.concat((typeof (variant) == 'string' ? [styles[variant]] || '' : variant.map((item) => styles[item])))
    classNames.push((leftIcon || rightIcon) && !children ? styles.icon : '')
    classNames.push(className)
    return (
        <button type='button' className={`${classNames.join(' ')}`}>
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    )
}

export default Button
