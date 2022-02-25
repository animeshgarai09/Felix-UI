import styles from './alert.module.scss'
import Button from '../Button/Button'
import { CgClose } from 'react-icons/cg'
import { BsCheckAll, BsInfo } from 'react-icons/bs'
import { HiExclamation, HiOutlineExclamationCircle } from 'react-icons/hi'

const Alert = (
    {
        status = 'info',        //  'success'|| 'error' || 'warning' || 'info',
        title,                  //  'text', //required,
        description,            //  'text',
        closeButton = false,    //   true|| false //default true
        className
    }) => {

    return (
        <div className={`${styles.container} ${styles[status]} ${className}`} role="alert">
            <div className={styles.icon}>
                {status == 'success' && <BsCheckAll />}
                {status == 'error' && <HiOutlineExclamationCircle />}
                {status == 'warning' && <HiExclamation />}
                {status == 'info' && <BsInfo />}
            </div>
            <div className={styles.text}>
                <span>{title}</span>
                <span>{description}</span>
            </div>
            {closeButton && <Button leftIcon={<CgClose />} className={styles.close} />}
        </div>
    )
}

export default Alert