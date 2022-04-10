import styles from './header.module.scss'
import { A, Button, IconButton } from '@felix-ui'
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
                    <A href="/documentation/installation" >Documentation</A>
                    <A href="#">
                        <Button
                            leftIcon={<AiFillGithub />}
                            theme="primary"
                            variant='ghost'
                            isRound
                        >
                            Github
                        </Button>
                    </A>
                    <IconButton icon={<HiOutlineSun />} ariaLabel="theme changer button" onClick={darkMode.toggle} />
                </div>
            </div>
        </header>
    )
}

export default Header
