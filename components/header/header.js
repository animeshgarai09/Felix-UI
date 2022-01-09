import styles from './header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <h3>Felix-UI</h3>
            <div className={styles.link_con}>
                <a href="">Documentation</a>
                <a href="">Examples</a>
            </div>
        </header>
    )
}

export default Header
