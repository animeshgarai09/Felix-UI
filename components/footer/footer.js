import styles from './footer.module.scss'
import { SocialLinks } from '../utils'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { A, Button } from '@felix-ui'
const footer = ({ previous, next }) => {
    return (
        <footer className={styles.container}>
            <div className={styles.links_con}>
                <A href={previous[1]}><Button className={styles.button} options={{ size: 'md', icon: <FiChevronLeft /> }}>{previous[0]}</Button></A>
                <A href={next[1]}><Button className={styles.button} options={{ size: 'md', icon: <FiChevronRight />, direction: 'right' }}>{next[0]}</Button></A>
            </div>
            <SocialLinks />
        </footer>
    )
}

export default footer
