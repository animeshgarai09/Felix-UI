import styles from './index.module.scss'
import { AiFillHeart, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { IoLogoLinkedin } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'
import { CopyBlock, dracula } from "react-code-blocks"
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

export const Codeblock = ({ lang, children }) => {
    return (
        <div className={styles.codeblock}>
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
