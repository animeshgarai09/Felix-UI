import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import { Button } from '@felix-ui'
import Header from '../components/header'
import { SocialLinks } from '../components/utils'
import { AiFillGithub } from 'react-icons/ai'
import Left from '../public/svg/left.svg'
import Right from '../public/svg/right.svg'

export default function Index() {
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
                    <p>Felix UI is a highly customizable React component library </p>
                    <p>Minimal, modular and accessible component library that gives you the building blocks for faster development.</p>
                    <div className={styles.actions}>
                        <Link href="/documentation/installation?v=react"><a><Button
                            size='lg'
                            isRound
                        >Get started</Button>
                        </a></Link>
                        <a href="https://github.com/animeshgarai09/Felix-UI-Library"><Button
                            leftIcon={<AiFillGithub />}
                            size='lg'
                            variant='outline'
                            isRound
                        >GitHub</Button>
                        </a>
                    </div>
                </div>
                <SocialLinks />
                <Left className={styles.left} />
                <Right className={styles.right} />
            </main>
        </>
    )
}
