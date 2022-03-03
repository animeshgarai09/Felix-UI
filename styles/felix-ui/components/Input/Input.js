import styles from './input.module.scss'
import InputGroup from './InputGroup'
import { useState } from 'react'
import { VscEyeClosed, VscEye, } from 'react-icons/vsc'

const id = Math.random().toString(36).substring(2, 10);


const Input = (props) => {
    const { type } = props
    if (type == 'text' || type == "email") {
        return <InputText {...props} />
    } else if (type == 'password') {
        return <InputPassword {...props} />
    }
}


const InputText = ({ label, errMsg, type, ref, placeholder, onChange }) => {

    return (
        <InputGroup id={id} label={label} errMsg={errMsg}>
            <input
                id={id}
                ref={ref}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </InputGroup>
    )
}

const InputPassword = ({ label, errMsg, ref, placeholder, onChange }) => {

    const [visible, setVisible] = useState(false)

    const passwordToggle = () => setVisible(visible => !visible)

    return (
        <InputGroup id={id} label={label} errMsg={errMsg}>
            <input
                id={id}
                ref={ref}
                type={visible ? 'text' : 'password'}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.password}
            />
            {visible && <VscEyeClosed onClick={passwordToggle} />}
            {!visible && <VscEye onClick={passwordToggle} />}
        </InputGroup>
    )
}

export default Input