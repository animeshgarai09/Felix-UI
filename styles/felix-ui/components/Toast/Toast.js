import styles from './toast.module.scss'
import Check from '../../svg/check.svg'
import Error from '../../svg/error.svg'
import Info from '../../svg/info.svg'
import Button from '../Button/Button'
import { CgClose } from 'react-icons/cg'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const Toast = (
    {
        id,
        message,                // message for the toast
        status = 'info',        //  'success'|| 'error' || 'warning' || 'info' || 'gray',
        dispatch,
        className,              //   User provided class name
    }) => {


    const [counter, setCounter] = useState(100)
    const [intervalId, setIntervalId] = useState(null)
    const [close, setClose] = useState(false)

    const startTimer = () => {
        const id = setInterval(() => {
            setCounter(counter => {
                if (counter != 0) {
                    console.log(counter)
                    return --counter
                }
                clearInterval(intervalId)
                return counter
            })
        }, 40);
        setIntervalId(id)
    }

    const stopTimer = () => {
        clearInterval(intervalId)
    }

    const closeToast = () => {
        setClose(true)
        stopTimer()
        setTimeout(() => {
            dispatch({
                type: "REMOVE_TOAST",
                id: id
            })
        }, 400);
    }

    useEffect(() => {
        startTimer()
    }, [])

    useEffect(() => {
        if (counter === 0) {
            closeToast()
        }
    }, [counter])

    const getIcon = () => {
        if (status == 'success') return <Check />
        else if (status == 'error') return <Error />
        else if (status == 'warning') return <Error />
        else if (status == 'info') return <Info />
    }
    return (
        <div onMouseEnter={stopTimer} onMouseLeave={startTimer}
            className={`${styles.container} ${styles[status]} ${className ? className : ''} ${close && styles.close}`}
        >

            <span className={styles.icon}>
                {getIcon()}
            </span>

            <div className={styles.text}>
                <span className={styles.heading}>{status}</span>
                <p>{message}</p>
            </div>
            <Button onClick={closeToast} leftIcon={<CgClose />} className={styles.btn_close} isTransform={false} />
        </div>
    )
}
Toast.propTypes = {
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['danger', 'info', 'warning', 'success', 'gray']).isRequired,
    className: PropTypes.string,
}
export default Toast