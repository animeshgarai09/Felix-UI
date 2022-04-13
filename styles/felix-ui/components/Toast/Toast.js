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
        id,                     // Unique id to track the toast
        message,                // Message for the toast
        status = 'info',        // 'success'|| 'error' || 'warning' || 'info' || 'gray',
        dispatch,               // Dispatcher function to remove toast on close 
        duration = 3,           // Duration for the toast in seconds
        className,              // User provided class name
    }) => {


    const [counter, setCounter] = useState(100)
    const [intervalId, setIntervalId] = useState(null)
    const [close, setClose] = useState(false)

    /* 
        Timer is set to decrement counter state(init:100) on every 40ms
        If the counter reaches 0 then clear the timer and close the toast
    */
    const startTimer = () => {
        const id = setInterval(() => {
            setCounter(counter => {
                if (counter != 0) {
                    return --counter
                }
                closeToast()
                return counter
            })
        }, duration * 10);
        /* Timer id is set to track and clear timer on demand */
        setIntervalId(id)
    }

    /* Function to clear the timer */
    const stopTimer = () => {
        clearInterval(intervalId)
    }

    /* 
        On close set state to add exit animation 
        Clear the timer
        Dispatch remove toast action after 400ms 
    */

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

    /* Start timer on component mount */

    useEffect(() => {
        startTimer()
    }, [])

    const getIcon = () => {
        if (status == 'success') return <Check />
        else if (status == 'error') return <Error />
        else if (status == 'warning') return <Error />
        else if (status == 'info') return <Info />
    }
    return (
        /* Pause timer on hover and start again onMouseLeave  */
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
    status: PropTypes.oneOf(['error', 'info', 'warning', 'success', 'gray']).isRequired,
    dispatch: PropTypes.func,
    duration: PropTypes.number,
    className: PropTypes.string,
}
export default Toast