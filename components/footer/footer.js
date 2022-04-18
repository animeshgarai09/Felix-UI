import styles from './footer.module.scss'
import { SocialLinks } from '../utils'
import Pages from '/components/pages'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Button } from '@felix-ui'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { isValidElement } from 'react'


const footer = ({ currentPage }) => {
    /* Fetching all the page names from imported Pages JSON */
    const pageNames = Object.keys(Pages)
    const [lang, setLang] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return
        const { v } = router.query
        v ? setLang(v) : setLang("react")
    }, [router.isReady, router.query])
    /*  Calculating previous and next index for footer buttons 
        if previous page index < 0 then return -1
        if next page index > available length of pages then return -1
    */
    const prevIndex = pageNames.indexOf(currentPage) - 1
    const nextIndex = pageNames.indexOf(currentPage) + 1 > pageNames.length - 1 ? -1 : pageNames.indexOf(currentPage) + 1

    const prevPageName = prevIndex !== -1 && (pageNames[prevIndex].includes("use")
        ? pageNames[prevIndex]
        : pageNames[prevIndex].toLowerCase() + `${isValidElement(Pages[pageNames[prevIndex]])
            ? ''
            : `?v=${lang}`
        }`)

    const nextPageName = nextIndex !== -1 && (pageNames[nextIndex].includes("use")
        ? pageNames[nextIndex]
        : pageNames[nextIndex].toLowerCase() + `${isValidElement(Pages[pageNames[nextIndex]])
            ? ''
            : `?v=${lang}`
        }`)
    return (
        <footer className={styles.container}>
            <div className={styles.links_con} style={{ flexDirection: prevIndex === -1 && "row-reverse" }}>
                {prevIndex !== -1
                    && <Link
                        href={`/documentation/${prevPageName}`}>
                        <a><Button className={styles.button} leftIcon={<FiChevronLeft />} isTransform={false}>{pageNames[prevIndex]}</Button></a>
                    </Link>}
                {nextIndex !== -1
                    && <Link
                        href={`/documentation/${nextPageName}`}>
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
