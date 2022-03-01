import styles from './alert.module.scss'
import Button from '../Button/Button'
import { CgClose } from 'react-icons/cg'
import { BsCheckAll, BsInfo } from 'react-icons/bs'
import { HiExclamation, HiOutlineExclamationCircle } from 'react-icons/hi'
import PropTypes from 'prop-types'

const Alert = (
    {
        status = 'info',        //  'success'|| 'error' || 'warning' || 'info' || 'gray',
        icon = true,
        title,                  //  'text', //required,
        closeButton = false,    //   true|| false //default true
        className,
        children
    }) => {

    const getIcon = () => {
        if (icon) {
            if (status == 'success') return <BsCheckAll />
            else if (status == 'error') return <HiOutlineExclamationCircle />
            else if (status == 'warning') return <HiExclamation />
            else if (status == 'info') return <BsInfo />
        }
    }
    return (
        <div className={`${styles.container} ${styles[status]} ${className}`} role="alert">
            <div className={styles.icon}>
                {getIcon()}
            </div>
            <div className={styles.text}>
                <span>{title}</span>
                {children}
            </div>
            {closeButton && <Button leftIcon={<CgClose />} className={styles.close} />}
        </div>
    )
}
Alert.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    icon: PropTypes.bool,
    title: PropTypes.string,
    closeButton: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node

}
export default Alert