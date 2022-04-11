import styles from './header.module.scss'
import { Button, IconButton } from '@felix-ui'
import { AiFillGithub } from 'react-icons/ai'
import { HiOutlineSun } from 'react-icons/hi'
import useDarkMode from "use-dark-mode";

const Header = () => {
    const darkMode = useDarkMode();
    return (
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <a href="/"> <img src="/images/felix.png" className={styles.logo} alt="" /></a>
                <div className={styles.links}>
                    <a href="/documentation/installation" >Documentation</a>
                    <a href="#">
                        <Button
                            leftIcon={<AiFillGithub />}
                            theme="primary"
                            variant='ghost'
                            isRound
                        >
                            Github
                        </Button>
                    </a>
                    <IconButton icon={<HiOutlineSun />} ariaLabel="theme changer button" onClick={darkMode.toggle} />
                </div>
            </div>
        </header>
    )
}

export default Header
