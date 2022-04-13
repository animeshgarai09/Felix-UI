import styles from '../Toast/toast.module.scss'
import Toast from '../Toast/Toast'
import { createContext, useContext, useReducer } from 'react'
import { genKey } from '../../utils/js'
const ToastContext = createContext()

const FelixProvider = ({ className, children }) => {

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
            <div className={`${styles.wrapper} ${className ? className : ''}`}>
                {
                    toastState.slice(0).reverse().map(props => {
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
            id: genKey(),
            ...props
        }
    })
}

export default FelixProvider