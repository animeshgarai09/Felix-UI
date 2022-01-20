import styles from '../utils/system.module.scss'
import Button from './Button'
import { IoClose } from 'react-icons/io'
import { BsCheckAll, BsInfo } from 'react-icons/bs'
import { HiExclamation, HiOutlineExclamationCircle } from 'react-icons/hi'

const Alert = ({ options, className }) => {
    /* 
        options={
            status: 'success'|| 'error-r' || 'warning' || 'info',
            title: 'text', //required
            descriptions: 'text',
            closeButton:true|| false //default true
        }
    */
    const { status, title, description, closeButton } = options ? options : {}
    return (
        <div className={`${styles.alert} ${styles[status]} ${className ? className : ''}`}>
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
            {closeButton && <Button options={{ icon: <IoClose /> }} className={styles.close}></Button>}
        </div>
    )
}

export default Alert