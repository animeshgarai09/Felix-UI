import styles from './alert.module.scss'
import Button from '../Button/Button'
import { CgClose } from 'react-icons/cg'
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
    const { status, title, description, closeButton = true } = options ? options : {}
    return (
        <div className={`${styles.container} ${styles[status]} ${className ? className : ''}`}>
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
            {closeButton && <Button options={{ icon: <CgClose /> }} className={styles.close} />}
        </div>
    )
}

export default Alert