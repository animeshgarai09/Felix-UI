import Head from 'next/head'
import styles from '../styles/index.module.scss'
import { Img, Input, Button, A, InputGroup } from '../styles/designComponents/components'
import Calendar from 'react-calendar'
import Select from 'react-select'
import { useState } from 'react'
import Header from '../components/header'
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
        <main className={styles.wrapper}>
            <Head>
                <title>Documentation || Felix-UI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div className={styles.main__container}>
                <Header />
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
                            {/* <InputGroup options={{
                                label: 'Number'
                            }}>
                                <select>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                </select>
                            </InputGroup> */}

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
            </div>

        </main>
    )
}
