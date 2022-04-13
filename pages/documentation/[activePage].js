import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@styles/documentation.module.scss'
import Header from 'components/header'
import { LinkGenerator } from 'components/utils'
import { Button, ButtonGroup } from '@felix-ui'
import Pages from '/components/pages'
const Documentation = () => {

    const [activePage, setActivePage] = useState('')
    const [lang, setLang] = useState('react')
    const [showLangSwitch, setShowLangSwitch] = useState(false)

    const router = useRouter()
    // Checking URL to load corresponding page and set it to activePage variable

    useEffect(() => {
        if (!router.isReady) return
        const { activePage, v } = router.query
        setActivePage(activePage)
        setLang(v)
        /* Check if language switch is required or not based on pages */
        activePage === 'installation' || activePage === 'colors' || activePage === 'typography'
            ? showLangSwitch && setShowLangSwitch(() => false)
            : !showLangSwitch && setShowLangSwitch(() => true)
    }, [router.isReady, router.query])

    useEffect(() => {

    }, [])
    const pageName = activePage && activePage[0].toUpperCase() + activePage.slice(1)
    /* 
        Based on the page stored in activePage variable 
        this function loads that particular component from JSON Pages imported
     */
    const loadPage = () => {
        const { [pageName]: docPage } = Pages
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

    return (
        <>
            <Head>
                <title>{pageName} - Felix UI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header activePage={activePage} lang={lang} />
            <main className={styles.main}>
                <aside className={styles.side_container}>
                    {router.isReady && <LinkGenerator activePage={activePage} lang={lang} styles={styles} />}
                </aside>
                <div className={styles.container}>
                    <section className={styles.sub_container}>
                        {pageName !== "Installation" && <div className={styles.heading_con}>
                            <h1>{pageName}</h1>
                            {showLangSwitch && <ButtonGroup size="sm" theme="primary">
                                <Button onClick={() => { router.push(`/documentation/${activePage}?v=react`) }} selected={lang === 'react'}>React</Button>
                                <Button onClick={() => { router.push(`/documentation/${activePage}?v=css`) }} selected={lang === 'css'}>CSS</Button>
                            </ButtonGroup>}
                        </div>
                        }
                        {activePage && lang && loadPage()}
                    </section>
                </div>
            </main>
        </>
    )
}

export default Documentation
