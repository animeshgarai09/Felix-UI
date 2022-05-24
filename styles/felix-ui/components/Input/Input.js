import styles from './input.module.scss'
import InputGroup from './InputGroup'
import { useState } from 'react'
import { VscEyeClosed, VscEye, } from 'react-icons/vsc'
import { forwardRef } from 'react'
import classnames from 'classnames'

const Input = forwardRef((props, ref) => {
    const id = Math.random().toString(36).substring(2, 10);
    const { type } = props
    if (type == 'text' || type == "email") {
        return <InputText id={id} ref={ref} {...props} />
    } else if (type == 'textarea') {
        return <InputTextArea id={id} ref={ref} {...props} />
    } else if (type == 'password') {
        return <InputPassword id={id} ref={ref} {...props} />
    }
})


const InputText = forwardRef(({ id, label, errMsg, type, className, placeholder, name, value, onChange }, ref) => {
    return (
        <InputGroup id={id} label={label} errMsg={errMsg}>
            <input
                id={id}
                ref={ref}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
            />
        </InputGroup>
    )
})

const InputTextArea = forwardRef(({ id, label, errMsg, height, resize = false, type, className, placeholder, name, value, onChange }, ref) => {
    const classNames = classnames(
        className,
        styles.textarea, {
        [styles.textarea_vertical]: resize,
        [styles.textarea_none]: !resize,
    })
    return (
        <InputGroup id={id} label={label} errMsg={errMsg}>
            <textarea
                id={id}
                ref={ref}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                style={{ height: `${height}px` }}
                className={classNames}
            ></textarea>
        </InputGroup>
    )
})

const InputPassword = forwardRef(({ id, label, errMsg, placeholder, className, name, value, onChange }, ref) => {

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
                name={name}
                value={value}
                className={`${styles.password} ${className}`}
            />
            {visible && <VscEyeClosed onClick={passwordToggle} />}
            {!visible && <VscEye onClick={passwordToggle} />}
        </InputGroup>
    )
})

export default Input