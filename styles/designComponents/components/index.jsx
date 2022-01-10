import { useState } from 'react'
import styles from './system.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { MdOpenInNew } from 'react-icons/md'
import { VscEyeClosed, VscEye } from 'react-icons/vsc'

export const A = ({ href, newTab, className, ...props }) => {
    return (
        <Link href={href}>
            <a className={className} target={newTab && '_blank'} >{props.children} {newTab && <MdOpenInNew />}</a>
        </Link>
    )
}

//Next image wrapper
export const Img = ({ id, src, alt, priority, quality, containerClass, imageClass, blur }) => {
    return (
        <div className={`${styles.image__con} ${containerClass}`}>
            <Image
                src={src}
                alt={alt}
                priority={priority}
                layout="fill"
                quality={quality}
                placeholder={blur && 'blur'}
                className={`${styles.image} ${imageClass}`}
                id={id}
            />
        </div>
    )
}

export const Input = ({ options }) => {
    if (options?.type == 'text' || options?.type == "email") {
        return <InputText options={options} />
    } else if (options?.type == 'password') {
        return <InputPassword options={options} />
    } else if (options?.type == 'radio') {
        return <InputRadio options={options} />
    }
}


export const InputGroup = ({ options, ...props }) => {
    return (
        <div className={`${styles.input__group} ${options?.err ? styles.error : ''}`}>
            {
                options.type == 'radio' &&
                <div className={styles.row}>
                    {props.children}
                </div>
            }

            {options.type != 'radio' && props.children}
            <div className={styles.info}>
                <label htmlFor={options?.id}>{options.type != 'radio' ? options?.label : options.name}</label>
                {options?.err && <span>{options?.err_msg}</span>}
            </div>
        </div >
    )
}
const InputText = ({ options }) => {
    let type = (options?.type == 'text' && 'text') || (options?.type == "email" && 'email')
    return (
        <InputGroup options={options}>
            <input
                id={options?.id}
                ref={options?.ref}
                type={type}
                placeholder={options?.placeholder}
                onChange={options?.onChange}
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
    return (
        <InputGroup options={options}>
            {visible && <VscEyeClosed onClick={passwordHideShow} />}
            {!visible && <VscEye onClick={passwordHideShow} />}
            <input
                id={options?.id}
                ref={options?.ref}
                type={visible ? 'text' : 'password'}
                placeholder={options?.placeholder}
                onChange={options?.onChange}
                className={styles.password}
            />
        </InputGroup>
    )
}

const InputRadio = ({ options }) => {
    return (
        <InputGroup options={options}>
            {options.value.map((val, i) => {
                return <>
                    <input type="radio" id={i} name={options.name} value={val} />
                    <label htmlFor={i}>{val}</label>
                </>
            })}

        </InputGroup>
    )
}


export const Button = ({ options, className }) => {
    /*
        options:{
            text:'submit',
            size:'xs' || 'sm' || 'md' || 'lg', // md is by default
            theme: 'primary' || 'info' || 'warning' || 'success' || disable, // primary is by default
            type: ['rounded','outlined','ghost','link'], // solid is by default
            icon: icon,
            direction: 'left' || 'right',
            className: 'class'
        }
    */
    let { text, icon, size = 'md', theme = 'primary', type = ['solid'], direction = "left" } = options

    return (
        <button className={`
            ${styles.button} 
            ${styles[size]} 
            ${styles[theme]} 
            ${(type.map((item) => styles[item])).join(' ')} 
            ${styles[direction]}
            ${className ? className : ''}`}
        >
            {icon}
            {text}
        </button>
    )
}
