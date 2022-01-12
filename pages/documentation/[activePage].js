import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/documentation.module.scss'
import Header from '../../components/header'
import { A } from '../../styles/designComponents/components'
import page from '../../components/pages'
const Documentation = () => {

    const [activePage, setActivePage] = useState('')
    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return

        const { activePage } = router.query
        setActivePage(activePage)
    }, [router.isReady, router.query])


    const loadPage = () => {
        const { [activePage[0].toUpperCase() + activePage.slice(1)]: docPage } = page
        return docPage
    }

    let genLink = flag => {
        let pageNames = Object.keys(page)
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
                    {activePage && loadPage()}
                </div>
                {/* <div className={styles.main__container}>
                    <section>
                        <p>This page defines the design language of UI elements used in Felix-UI projects and meant to be reused through out every project</p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus autem quos sint. Reiciendis distinctio doloremque modi labore blanditiis excepturi eos minus maiores. Ab dolores deleniti itaque distinctio dicta voluptatibus?
                    </section>

                    <section className='container'>
                        <div className='column'>
                            <div className='row'>

                                <button>Button 1</button>

                                <InputGroup options={{
                                    label: 'Number'
                                }}>
                                    <Select
                                        options={Countries}
                                        // closeMenuOnSelect={false}
                                        // menuIsOpen={true}
                                        menuPosition="absolute"
                                        className='react-select-container'
                                        classNamePrefix="react-select"
                                        isSearchable={false}
                                        placeholder='Choose from options'
                                    />
                                </InputGroup>
                                <Input options={{
                                    type: "email",
                                    label: "Email",
                                    id: "email",
                                }} />

                                <Input options={{
                                    type: "password",
                                    label: "Password",
                                    id: "password",
                                }} />
                                <InputGroup options={{
                                label: 'Number'
                            }}>
                                <select>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                </select>
                            </InputGroup>

                                <Input options={{
                                    type: "radio",
                                    value: ["Male", "Female"],
                                    name: 'Gender'
                                }}

                                />
                                <Calendar
                                    onChange={onChange2}
                                    value={value}

                                />


                                <Button />
                            </div>
                            <A href="https://www.google.com" newTab={true} ></A>
                        </div>
                    </section>
                </div> */}
            </main>
        </>
    )
}

export default Documentation
