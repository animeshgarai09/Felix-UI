import styles from './index.module.scss'
import { AiFillHeart, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { IoLogoLinkedin } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'
import { CopyBlock, dracula } from "react-code-blocks"
import Link from 'next/link'
import Pages from '/components/pages'
import React from 'react'
export const SocialLinks = () => {
    return (
        <div className={styles.container}>
            <span>Made with <AiFillHeart /> by <a href="https://portfolio-alpha-liart.vercel.app/"> Animesh Garai</a></span>
            <div className={styles.links}>
                <a href={'https://github.com/animeshgarai09'}><AiFillGithub /></a>
                <a href={'https://twitter.com/animeshgarai09'}><AiFillTwitterCircle /></a>
                <a href={'https://www.linkedin.com/in/animesh-garai-29a5251b4'}><IoLogoLinkedin /></a>
                <a href={'mailto:animeshgarai09@gmail.com'}><HiMail /></a>
            </div>
        </div>
    )
}

export const Codeblock = ({ lang, className, children }) => {
    return (
        <div className={`${styles.codeblock} ${className}`}>
            <CopyBlock
                text={children}
                language={lang}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
                className="hello"
            />
        </div>
    )
}

export const LinkGenerator = ({ activePage, lang, styles, onClick }) => {
    return (
        <>
            <span className={styles.label}>Getting started</span>
            {genLink(activePage, lang, styles, 0, 3, onClick)}
            <span className={styles.label}>Elements</span>
            {genLink(activePage, lang, styles, 3, 7, onClick)}
            <span className={styles.label}>Views</span>
            {genLink(activePage, lang, styles, 7, 13, onClick)}
        </>
    )
}

const genLink = (activePage, lang, styles, start, end, onClick) => {
    const pageNames = Object.keys(Pages)
    let com = pageNames.slice(start, end).map((item, i) => {

        const check = React.isValidElement(Pages[item])
        const link = item.toLowerCase() + (!check ? `?v=${lang}` : '')

        return <Link href={link} key={item}>
            <a
                className={`${styles.link} ${activePage == item.toLowerCase() ? styles.active : ''}`}
                onClick={onClick}
            >
                {item}
            </a>
        </Link>
    })
    return com
}
