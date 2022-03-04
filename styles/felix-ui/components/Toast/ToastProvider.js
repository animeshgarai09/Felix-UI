import styles from './toast.module.scss'
import Toast from './Toast'
import { createContext, useContext, useReducer } from 'react'
import { v4 } from 'uuid'

const ToastContext = createContext()

const ToastProvider = ({ children }) => {

    const [toastState, toastDispatcher] = useReducer((state, action) => {

        switch (action.type) {
            case "ADD_TOAST":
                return [...state, { ...action.payload }]
            case "REMOVE_TOAST":
                return state.filter(el => el.id != action.id);
            default:
                return state
        }
    }, [])

    return (
        <ToastContext.Provider value={toastDispatcher}>
            {children}
            <div className={styles.wrapper}>
                {
                    toastState.map(props => {
                        return <Toast dispatch={toastDispatcher} key={props.id} {...props} />
                    })
                }
            </div>
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    const dispatch = useContext(ToastContext)
    return (props) => dispatch({
        type: "ADD_TOAST",
        payload: {
            id: v4(),
            ...props
        }
    })
}

export default ToastProvider