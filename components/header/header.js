import styles from './header.module.scss'
import Link from 'next/link'
import { Button, IconButton, useLockBodyScroll } from '@felix-ui'
import { AiFillGithub } from 'react-icons/ai'
import { HiOutlineSun, HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { FiMoon } from 'react-icons/fi'
import useDarkMode from "use-dark-mode";
import { LinkGenerator } from 'components/utils'
import { useState, useEffect } from 'react'

const Header = ({ activePage, lang }) => {
    const darkMode = useDarkMode();
    const [menu, setMenu] = useState(false)

    const bodyLock = useLockBodyScroll();
    useEffect(() => {
        if (menu)
            bodyLock.lock()
        else
            bodyLock.unlock()
    }, [menu])
    return (
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/"><a> <img src="/images/felix.png" className={styles.logo} alt="" /></a></Link>
                <div className={styles.links}>
                    <Link href="/documentation/installation"><a className={styles.desk}>Documentation</a></Link>
                    <a href="https://github.com/animeshgarai09/Felix-UI-Library" className={styles.desk}>
                        <Button
                            leftIcon={<AiFillGithub />}
                            theme="primary"
                            variant='ghost'
                            isRound
                        >
                            Github
                        </Button>
                    </a>
                    <IconButton
                        className={styles.toggle}
                        icon={darkMode.value ? <HiOutlineSun /> : <FiMoon />}
                        ariaLabel="theme changer button"
                        onClick={darkMode.toggle}
                    />
                    <IconButton
                        className={`${styles.toggle} ${styles.mob}`}
                        icon={menu ? <MdClose /> : <HiOutlineMenuAlt3 />}
                        ariaLabel="mobile menu open / close button"
                        onClick={() => setMenu(prev => !prev)}
                    />
                </div>
            </div>
            <div className={`${styles.menu} ${menu && styles.open}`}>
                {
                    activePage && lang &&
                    <LinkGenerator activePage={activePage} lang={lang} styles={styles} onClick={() => setMenu(false)} />
                }
            </div>
        </header>
    )
}

export default Header
