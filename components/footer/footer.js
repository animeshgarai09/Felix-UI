import styles from './footer.module.scss'
import { SocialLinks } from '../utils'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { A, Button } from '@felix-ui'
const footer = ({ previous, next }) => {
    return (
        <footer className={styles.container}>
            <div className={styles.links_con}>
                <A href={`/documentation/${previous.toLowerCase()}`}><Button className={styles.button} leftIcon={<FiChevronLeft />}>{previous}</Button></A>
                <A href={`/documentation/${next.toLowerCase()}`}><Button className={styles.button} rightIcon={<FiChevronRight />}>{next}</Button></A>
            </div>
            <SocialLinks />
        </footer>
    )
}

export default footer
