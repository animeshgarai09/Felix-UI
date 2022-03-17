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


const InputText = ({ label, errMsg, type, Fref, placeholder, name, value, onChange }) => {

    return (
        <InputGroup id={id} label={label} errMsg={errMsg}>
            <input
                id={id}
                ref={Fref}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </InputGroup>
    )
}

const InputPassword = ({ label, errMsg, Fref, placeholder, name, value, onChange }) => {

    const [visible, setVisible] = useState(false)

    const passwordToggle = () => setVisible(visible => !visible)

    return (
        <InputGroup id={id} label={label} errMsg={errMsg}>
            <input
                id={id}
                ref={Fref}
                type={visible ? 'text' : 'password'}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                value={value}
                className={styles.password}
            />
            {visible && <VscEyeClosed onClick={passwordToggle} />}
            {!visible && <VscEye onClick={passwordToggle} />}
        </InputGroup>
    )
}

export default Input