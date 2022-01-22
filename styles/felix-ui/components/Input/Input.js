import styles from './input.module.scss'
import InputGroup from './InputGroup'
import { useState } from 'react'
import { VscEyeClosed, VscEye, } from 'react-icons/vsc'

const Input = ({ options }) => {
    const { type } = options
    if (type == 'text' || type == "email") {
        return <InputText options={options} />
    } else if (type == 'password') {
        return <InputPassword options={options} />
    }
    // else if (options?.type == 'radio') {
    //     return <InputRadio options={options} />
    // }
}


const InputText = ({ options }) => {
    const { type, id, ref, placeholder, onChange } = options
    return (
        <InputGroup options={options}>
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

const InputPassword = ({ options }) => {
    const [visible, setVisible] = useState(false)
    function passwordHideShow() {
        console.log('hello')
        setVisible(!visible)
    }

    const { id, ref, placeholder, onChange } = options
    return (
        <>
            <InputGroup options={options}>

                <input
                    id={id}
                    ref={ref}
                    type={visible ? 'text' : 'password'}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={styles.password}
                />
                {visible && <VscEyeClosed onClick={passwordHideShow} />}
                {!visible && <VscEye onClick={passwordHideShow} />}
            </InputGroup>
        </>
    )
}

export default Input