import { useState } from 'react'
import styles from './system.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { MdOpenInNew } from 'react-icons/md'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { VscEyeClosed, VscEye, } from 'react-icons/vsc'

export const A = ({ href, newTab, className, ...props }) => {
    return (
        <Link href={href}>
            <a className={className} target={newTab && '_blank'} >{props.children} {newTab && <MdOpenInNew />}</a>
        </Link>
    )
}

//Next image wrapper
export const Img = ({ options }) => {
    let { id, src, alt, priority, quality, containerClass, imageClass, blur } = options
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


export const Button = ({ options, className, children }) => {
    /*
        options:{
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
            {children}
        </button>
    )
}
const gradientColors = [
    'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
    'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)',
    'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)',
    'linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)',
    'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)',
    'linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)',
    'linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)',
    'linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)',
    'linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)',
    'linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%)'
]

function randomNumberGen(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) << 0;
}

export const Avatar = ({ options }) => {
    /*
        options:{
            name: name,
            src: link,
            size: 'xs' || 'sm' || 'md' || 'lg' || 'xl' || '2xl',
            badge: 'green' || 'red' || 'blue',
        }
    */
    const { name, src, num, size = 'md', badge } = options
    const shortName = name && name.split(' ')[0][0].toUpperCase() + name.split(' ')[1][0].toUpperCase()
    return (
        <div className={styles.avatar}>
            {src && <Img options={{
                src: src,
                alt: name,
                containerClass: styles[size],
                imageClass: styles.circle,
            }} />}

            {!src && name &&
                <div style={{ background: gradientColors[randomNumberGen(9)] }} className={`${styles.text} ${styles[size]} ${styles.circle}`}>
                    <span>{shortName}</span>
                </div>
            }

            {!src && !name &&
                <div className={`${styles.info} ${styles.circle}`}>
                    <span>{'+' + num}</span>
                </div>
            }

            {badge &&
                <span className={`${styles.badge} ${styles[badge]} `}>
                </span>
            }
        </div>
    )
}

export const AvatarGroup = ({ options, children }) => {
    /* 
        options={
            size: 'xs' || 'sm' || 'md' || 'lg' || 'xl' || '2xl', // md is by default
            show: 5
            max: 100
        }
    */

    const { size = 'md', show, max } = options


    return (
        <div className={`${styles.avatar_group} ${styles[size]}`}>
            {children.slice(0, show)}
            <Avatar options={{
                num: max || (children.slice(show, children.length)).length,
                // src: '/images/100200.jpeg',
            }} />
        </div>
    )

}

export const Rating = ({ options, className }) => {
    /*
        options={
            points: number,//(0-5)
            text: false || true //default true
        }
    */
    let { points, text } = options
    let [first, second] = points.toString().split('.')
    let blank = second ? 4 - parseInt(first) : 5 - parseInt(first)
    let arr = []
    let i = 0;
    while (i < first) {
        arr.push(<FaStar key={i} size={15} />)
        i++
    }
    if (second) {
        arr.push(<FaStarHalfAlt key={7} size={15} />)
    }
    i = 0
    while (i < blank) {
        arr.push(<FaRegStar key={10 + i} size={15} />)
        i++
    }

    return (
        <span className={`${styles.rating} ${className}`}>
            {arr}
            {text && points}
        </span>
    )
}
