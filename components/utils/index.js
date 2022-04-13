import styles from './index.module.scss'
import { AiFillHeart, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { IoLogoLinkedin } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'
import { CopyBlock, dracula } from "react-code-blocks"
import Link from 'next/link'
import Pages from '/components/pages'
import { useRouter } from 'next/router'

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

export const LinkGenerator = ({ activePage, lang, styles }) => {
    return (
        <>
            <span className={styles.label}>Getting started</span>
            {genLink(activePage, lang, styles, 0, 3)}
            <span className={styles.label}>Elements</span>
            {genLink(activePage, lang, styles, 3, 7)}
            <span className={styles.label}>Views</span>
            {genLink(activePage, lang, styles, 7, 12)}
        </>
    )
}

const genLink = (activePage, lang, styles, start, end) => {
    const pageNames = Object.keys(Pages)
    let com = pageNames.slice(start, end).map((item, i) => {
        const link = item.toLowerCase()
        return <Link href={link + `?v=${lang}`}><a key={i} className={`${styles.link} ${activePage == link ? styles.active : ''}`} >{item}</a></Link>
    })
    return com
}
