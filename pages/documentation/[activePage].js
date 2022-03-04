import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@styles/documentation.module.scss'
import Header from '../../components/header'
import { A, Button, ButtonGroup } from '@felix-ui'
import Pages from '/components/pages'
const Documentation = () => {

    const [activePage, setActivePage] = useState('')
    const [lang, setLang] = useState('react')
    const [showLangSwitch, setShowLangSwitch] = useState(false)

    const router = useRouter()

    // Checking URL to load corresponding page and set it to activePage variable

    useEffect(() => {
        if (!router.isReady) return
        const { activePage } = router.query
        setActivePage(activePage)
        /* Check if language switch is required or not based on pages */
        activePage === 'installation' || activePage === 'colors' || activePage === 'typography'
            ? showLangSwitch && setShowLangSwitch(() => false)
            : !showLangSwitch && setShowLangSwitch(() => true)
    }, [router.isReady, router.query])

    /* 
        Based on the page stored in activePage variable 
        this function loads that particular component from JSON Pages imported
     */
    const loadPage = () => {
        const { [activePage[0].toUpperCase() + activePage.slice(1)]: docPage } = Pages
        /* 
            Pages JSOn has direct 3 key with component ('installation','colors','typography' )
            Check if docPage has component or JSON before returning 
        */
        if (React.isValidElement(docPage)) {
            return docPage
        } else {
            return lang === 'react' ? docPage?.react : docPage?.css
        }
    }

    //creates side navigation from Pages JSON
    let genLink = (start, end) => {
        const pageNames = Object.keys(Pages)
        let com = pageNames.slice(start, end).map((item, i) => {
            const link = item.toLowerCase()
            return <A key={i} className={`${styles.link} ${activePage == link ? styles.active : ''}`} href={`${link}`}>{item}</A>
        })
        return com
    }

    return (
        <>
            <Head>
                <title>Documentation - Felix UI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header />
            <main className={styles.main}>
                <aside className={styles.side_container}>
                    <span className={styles.label}>Getting started</span>
                    {router.isReady && genLink(0, 3)}
                    <span className={styles.label}>Elements</span>
                    {router.isReady && genLink(3, 7)}
                    <span className={styles.label}>Views</span>
                    {router.isReady && genLink(7, 12)}
                    {/* <span className={styles.label}>Modules</span>
                    {router.isReady && genLink(11)} */}

                </aside>
                <div className={styles.container}>
                    <section className={styles.sub_container}>
                        <div className={styles.heading_con}>
                            <h1>{activePage && activePage[0].toUpperCase() + activePage.slice(1)}</h1>
                            {showLangSwitch && <ButtonGroup size="sm" theme="primary">
                                <Button onClick={() => { setLang('react') }} selected={lang == 'react' && true}>React</Button>
                                <Button onClick={() => { setLang('css') }} selected={lang == 'css' && true}>CSS</Button>
                            </ButtonGroup>}
                        </div>
                        {activePage && lang && loadPage()}
                    </section>
                </div>
            </main>
        </>
    )
}

export default Documentation
