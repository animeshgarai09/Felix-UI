import styles from './header.module.scss'
import { A } from '../../styles/felix-ui'
const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.sub_con}>
                <h3>Felix-UI</h3>
                <div className={styles.link_con}>
                    <A href="/documentation" >Documentation</A>
                    <A href="#">Examples </A>
                </div>
            </div>
        </header>
    )
}

export default Header
