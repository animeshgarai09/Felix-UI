import styles from './header.module.scss'
import { A, Button } from '@felix-ui'
import { AiFillGithub } from 'react-icons/ai'

const Header = () => {
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
                            variant={['round', 'ghost']}
                        >
                            Github
                        </Button>
                    </A>
                </div>
            </div>
        </header>
    )
}

export default Header
