import styles from './footer.module.scss'
import { SocialLinks } from '../utils'
import Pages from '/components/pages'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Button } from '@felix-ui'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


const footer = ({ currentPage }) => {
    /* Fetching all the page names from imported Pages JSON */
    const pageNames = Object.keys(Pages)
    const [lang, setLang] = useState(-1)
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return
        const { v } = router.query
        setLang(v)
    }, [router.isReady, router.query])
    /*  Calculating previous and next index for footer buttons 
        if previous page index < 0 then return -1
        if next page index > available length of pages then return -1
    */
    const previousIndex = pageNames.indexOf(currentPage) - 1
    const nextIndex = pageNames.indexOf(currentPage) + 1 > pageNames.length ? -1 : pageNames.indexOf(currentPage) + 1
    return (
        <footer className={styles.container}>
            <div className={styles.links_con} style={{ flexDirection: previousIndex === -1 && "row-reverse" }}>
                {previousIndex !== -1
                    && <Link
                        href={`/documentation/${pageNames[previousIndex].toLowerCase() + `?v=${lang}`}`}>
                        <a><Button className={styles.button} leftIcon={<FiChevronLeft />} isTransform={false}>{pageNames[previousIndex]}</Button></a>
                    </Link>}
                {nextIndex !== -1
                    && <Link
                        href={`/documentation/${pageNames[nextIndex].toLowerCase() + `?v=${lang}`}`}>
                        <a><Button className={styles.button} rightIcon={<FiChevronRight />} isTransform={false}>{pageNames[nextIndex]}</Button></a>
                    </Link>}
            </div>
            <SocialLinks />
        </footer>
    )
}
footer.propTypes = {
    currentPage: PropTypes.string
}
export default footer
