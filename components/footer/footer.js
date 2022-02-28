import styles from './footer.module.scss'
import { SocialLinks } from '../utils'
import Pages from '/components/pages'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { A, Button } from '@felix-ui'
import PropTypes from 'prop-types'

const pageNames = Object.keys(Pages)

const footer = ({ currentPage }) => {
    const previous = pageNames.indexOf(currentPage) - 1
    const next = pageNames.indexOf(currentPage) + 1 > pageNames.length ? -1 : pageNames.indexOf(currentPage) + 1
    return (
        <footer className={styles.container}>
            <div className={styles.links_con}>
                {previous !== -1 && <A href={`/documentation/${pageNames[previous].toLowerCase()}`}><Button className={styles.button} leftIcon={<FiChevronLeft />} transform={false}>{pageNames[previous]}</Button></A>}
                {next !== -1 && <A href={`/documentation/${pageNames[next].toLowerCase()}`}><Button className={styles.button} rightIcon={<FiChevronRight />} transform={false}>{pageNames[next]}</Button></A>}
            </div>
            <SocialLinks />
        </footer>
    )
}
footer.propTypes = {
    currentPage: PropTypes.oneOf([...pageNames])
}
export default footer
