import styles from './index.module.scss'
import { AiFillHeart, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { IoLogoLinkedin } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'
import { CodeBlock, dracula } from "react-code-blocks"
import { A } from '@felix-ui'
export const SocialLinks = () => {
    return (
        <div className={styles.container}>
            <span>Made with <AiFillHeart />  by Animesh Garai</span>
            <div className={styles.links}>
                <A href={'https://github.com/animeshgarai09'}><AiFillGithub /></A>
                <A href={'https://twitter.com/animeshgarai09'}><AiFillTwitterCircle /></A>
                <A href={'https://www.linkedin.com/in/animesh-garai-29a5251b4'}><IoLogoLinkedin /></A>
                <A href={'mailto:animeshgarai09@gmail.com'}><HiMail /></A>
            </div>
        </div>
    )
}

export const Codeblock = ({ children }) => {
    return (
        <CodeBlock
            text={children}
            language='jsx'
            showLineNumbers={false}
            theme={dracula}
        />
    )
}

