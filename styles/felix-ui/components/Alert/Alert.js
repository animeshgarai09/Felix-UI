import styles from './alert.module.scss'
import { CgClose } from 'react-icons/cg'
import { BsCheck, BsInfo } from 'react-icons/bs'
import { HiExclamation, HiOutlineExclamationCircle } from 'react-icons/hi'
import PropTypes from 'prop-types'
import IconButton from '../IconButton/IconButton'
import classnames from 'classnames'

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

    const classNames = classnames(
        styles.container,
        styles[status],
        className
    )
    return (
        <div className={classNames} role="alert">

            <div className={styles.text}>
                <span className={styles.heading}>
                    {icon && <span className={styles.icon}>
                        {getIcon()}
                    </span>}
                    {title}
                </span>
                {children && <p>{children}</p>}
            </div>
            {closeButton && <IconButton icon={<CgClose />} className={styles.close} ariaLabel="alert close button" />}
        </div>
    )
}
Alert.propTypes = {
    status: PropTypes.oneOf(['error', 'info', 'warning', 'success', 'gray']),
    icon: PropTypes.bool,
    title: PropTypes.string,
    closeButton: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node

}
export default Alert