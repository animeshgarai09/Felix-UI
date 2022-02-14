import Head from 'next/head'
import styles from '../styles/index.module.scss'
import { Img, Input, Button, A, InputGroup } from '@felix-ui'
import Calendar from 'react-calendar'
import Select from 'react-select'
import { useState } from 'react'
import Header from '../components/header'
import { BsArrowRight } from 'react-icons/bs'
export default function Index() {
    const [value, onChange2] = useState(new Date());
    const Countries = [
        { label: "Albania", value: 355 },
        { label: "Argentina", value: 54 },
        { label: "Austria", value: 43 },
        { label: "Cocos Islands", value: 61 },
        { label: "Kuwait", value: 965 },
        { label: "Sweden", value: 46 },
        { label: "Venezuela", value: 58 }
    ];
    return (
        <>
            <Head>
                <title>Felix UI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header />
            <main className={styles.container}>
                <div className={styles.text}>
                    <h1>Build modern websites better <span> with speed </span></h1>
                    <p>Felix UI is a React component library built for Next JS </p>
                    <p>Minimal, modular and accessible component library that gives you the building blocks for faster development.</p>
                    <div className={styles.actions}>
                        <Button options={{
                            icon: <BsArrowRight />,
                            size: 'lg',
                            variant: 'round',
                            direction: 'right',
                        }}>Get started</Button>
                        <Button options={{
                            // icon: <BsArrowRight />,
                            size: 'lg',
                            variant: ['round', 'outline', 'ghost'],
                            direction: 'right',
                        }}>GitHub</Button>
                    </div>
                </div>

            </main>
        </>
    )
}
