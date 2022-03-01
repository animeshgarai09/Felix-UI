import styles from './alert.module.scss'
import Button from '../Button/Button'
import { CgClose } from 'react-icons/cg'
import { BsCheck, BsInfo } from 'react-icons/bs'
import { HiExclamation, HiOutlineExclamationCircle } from 'react-icons/hi'
import PropTypes from 'prop-types'

const Alert = (
    {
        status = 'info',        //  'success'|| 'error' || 'warning' || 'info' || 'gray',
        icon = true,            //   Show icon based on status
        title,                  //  'text', //required,
        closeButton = false,    //   true|| false //default true
        className,              //   User provided class name
        children                //   Description as children
    }) => {

    const getIcon = () => {
        if (status == 'success') return <BsCheck />
        else if (status == 'error') return <HiOutlineExclamationCircle />
        else if (status == 'warning') return <HiExclamation />
        else if (status == 'info') return <BsInfo />
    }
    return (
        <div className={`${styles.container} ${styles[status]} ${className}`} role="alert">

            <div className={styles.text}>
                <span className={styles.heading}>
                    {icon && <span className={styles.icon}>
                        {getIcon()}
                    </span>}
                    {title}
                </span>
                {children && <p>{children}</p>}
            </div>
            {closeButton && <Button leftIcon={<CgClose />} className={styles.close} isTransform={false} />}
        </div>
    )
}
Alert.propTypes = {
    status: PropTypes.oneOf(['danger', 'info', 'warning', 'success', 'gray']),
    icon: PropTypes.bool,
    title: PropTypes.string,
    closeButton: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node

}
export default Alert