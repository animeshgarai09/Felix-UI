import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@styles/documentation.module.scss'
import Header from '../../components/header'
import { A } from '@felix-ui'
import reactPages from '../../components/pages/react'

const Documentation = () => {

    const [activePage, setActivePage] = useState('')

    const router = useRouter()

    // Checking URL to load corresponding page and set it to activePage variable

    useEffect(() => {
        if (!router.isReady) return
        const { activePage } = router.query
        setActivePage(activePage)
    }, [router.isReady, router.query])

    // Based on the page stored in activePage variable it load that particular component from JSON (reactPages or cssPages) 
    const loadPage = () => {
        const { [activePage[0].toUpperCase() + activePage.slice(1)]: docPage } = reactPages
        return docPage
    }

    //creates side navigation from reactPages JSON
    let genLink = flag => {
        let pageNames = Object.keys(reactPages)
        let com;
        if (flag) {
            com = pageNames.slice(0, 3).map((item, i) => {
                let link = item.toLowerCase()
                return <A key={i} className={`${styles.link} ${activePage == link ? styles.active : ''}`} href={`${link}`}>{item}</A>
            })
        } else {
            com = pageNames.map((item, i) => {
                if (i > 2) {
                    let link = item.toLowerCase()
                    return <A key={i} className={`${styles.link} ${activePage == link ? styles.active : ''}`} href={`${link}`}>{item}</A>
                }
            })
        }
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
                    <h5>Getting started</h5>
                    {router.isReady && genLink(true)}
                    <h5>Components</h5>
                    {router.isReady && genLink()}

                </aside>
                <div className={styles.container}>
                    <section className={styles.sub_container}>
                        {activePage && loadPage()}
                    </section>
                </div>
            </main>
        </>
    )
}

export default Documentation
