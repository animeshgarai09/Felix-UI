import Head from 'next/head'
import styles from '../styles/documentation.module.scss'
import Header from '../components/header'
import { A } from '../styles/designComponents/components'
const Documentation = () => {

    let links = ['Introduction', 'Colors', 'Typography', 'Conclusion', 'Avatar', 'Alert', 'Badge', 'Button', 'Card', 'Grid', 'Image', 'Input', 'List', 'Modal', 'Navigation', 'Rating', 'Toggle button']
    let genLink = flag => {
        let com;
        if (flag) {
            com = links.slice(0, 3).map((item, i) => {
                return <A className={styles.link} href={`\\${item.toLowerCase()}`}>{item}</A>
            })
        } else {
            com = links.map((item, i) => {
                if (i > 3) {
                    return <A className={styles.link} href={`\\${item.toLowerCase()}`}>{item}</A>
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
                    {genLink(true)}
                    <h5>Components</h5>
                    {genLink()}

                </aside>
                <div className={styles.container}>

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
