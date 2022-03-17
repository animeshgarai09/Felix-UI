import { Input } from '@felix-ui'
import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import Footer from 'components/footer/footer'
import { useEffect, useRef } from "react"

const InputUI = () => {

    const signUpRef = useRef(null)
    const signInRef = useRef(null)

    useEffect(() => {
        console.log(signUpRef, signInRef)
    }, [signUpRef, signInRef])
    return (
        <>
            <p>The <code>Input</code> component is a component that is used to get user input in a text field.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { Input } from '@felix-ui'`}
            </Codeblock>
            <h4>Usage</h4>
            <p>Here's a basic usage example of the <code>Input</code> component:</p>
            <div className={styles.element_container}>
                <Input type="text" label="Full name" Fref={signUpRef} />
            </div>
            <Codeblock lang="jsx">
                {`<Input type="text" label="Full name"/>`}
            </Codeblock>
            <h4>Input type</h4>
            <p>Input component comes with 3 types. pass <code>text</code>, <code>email</code>, <code>password</code> props to <code>type</code>.
                Input component with <code>password</code> type comes with hide and show button.</p>
            <div className={styles.element_container}>
                <Input type="text" label="Full name" Fref={signInRef} />
                <Input type="email" label="Email" />
                <Input type="password" label="Password" />
            </div>
            <Codeblock lang="jsx">
                {`<Input options={{ type: "text", label: "Full name"/>
<Input options={{ type: "email", label: "Email", id: "email" }} />
<Input options={{ type: "password", label: "Password", id: "password" }} />`}
            </Codeblock>

            <h4>Input with error message</h4>
            <p>For validation purpose <code>Input</code> component has <code>err_msg</code> prop.</p>
            <div className={styles.element_container}>
                <Input type="password" label="Password" id="password" errMsg="Incorrect password" />
            </div>
            <Codeblock lang="jsx">
                {`<Input type="password" label="Password" id="password" errMsg="Incorrect password"/>`}
            </Codeblock>
            <Footer currentPage='Input' />
        </>
    )
}

export default InputUI
