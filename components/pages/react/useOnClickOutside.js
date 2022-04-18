import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import { Button, Alert, useOnClickOutside } from "@felix-ui"
import Footer from "components/footer"
import { useState } from 'react'

const UseOnClickOutsideUI = () => {
    const [firstModalState, setFirstModalState] = useState(false)
    const [secModalState, setSecModalState] = useState(false)
    const [h3Ref, setH3Ref] = useState(null)

    const firstModalRef = useOnClickOutside({
        handler: () => setFirstModalState(false)
    })

    const secondModalRef = useOnClickOutside({
        handler: () => setSecModalState(false),
        nodes: [h3Ref]
    })
    return (
        <>
            <p>
                <code>useOutsideClick</code> is a custom hook that handles click events outside a specific DOM element, like a <code>div</code>. A handler is invoked when a click or touch event happens outside the referenced element.
            </p>
            <Alert
                status='warning'
                title='Note: This hook is compatible with mouse and touch events.'
                className={styles.alert}
            />
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { useOnClickOutside } from "react-felix-ui"`}
            </Codeblock>

            <h4>Usage</h4>
            <div className={styles.element_container}>
                {
                    firstModalState
                        ? <div ref={firstModalRef}>👋 Hey, I'm a modal. Click anywhere outside of me to close. </div>
                        : <Button onClick={() => setFirstModalState(true)} size="sm">Open modal</Button>
                }
            </div>
            <Codeblock lang="jsx">
                {`function Example() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const ref = useOutsideClick({
        handler: () => setIsModalOpen(false),
    })

    return (
        <>
            {isModalOpen ? (
            <div ref={ref}>
                👋 Hey, I'm a modal. Click anywhere outside of me to close.
            </div>
            ) : (
            <Button onClick={() => setModalState(true)} >Open modal</Button>
            )}
        </>
    )
}`}
            </Codeblock>
            <h4>Multiple nodes</h4>
            <p>In some cases you may want to trigger outside click event for multiple nodes, for example, when dropdown renders in portal. To do so provide third argument with an array of nodes which should not trigger outside click event:</p>
            <Alert
                status='warning'
                title='Note: Nodes has to be states. Hook only works with states and not useRef.'
                className={styles.alert}
            />
            <div className={styles.element_container}>
                {
                    secModalState
                        ? <>
                            <div ref={secondModalRef}>
                                👋 Hey, I'm a modal. Click anywhere outside of me to close.
                            </div>
                            <h3 ref={setH3Ref}>Click on me. I don't trigger modal to close.</h3>
                        </>
                        : <Button onClick={() => setSecModalState(true)} size="sm">Open modal</Button>
                }
            </div>
            <Codeblock lang="jsx">
                {`function Example() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [h3Ref, setH3Ref] = useState(null)

    const ref = useOutsideClick({
        handler: () => setIsModalOpen(false),
        nodes:[h3Ref]
    })

    return (
        <>
            {isModalOpen ? (
            <>
                <div ref={secondModalRef}>
                    👋 Hey, I'm a modal. Click anywhere outside of me to close.
                </div>
                <h3 ref={setH3Ref}>Click on me. I don't trigger modal to close.</h3>
            </>
            ) : (
            <Button onClick={() => setModalState(true)} >Open modal</Button>
            )}
        </>
    )
}`}
            </Codeblock>
            <h4>Arguments</h4>
            <p>The <code>useOnClickOutside</code> hook takes the following arguments:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>handler</code></td>
                        <td><code>function</code></td>
                        <td><code>true</code></td>
                        <td>
                            <code>function</code> that will be called on outside click trigger.
                        </td>
                    </tr>
                    <tr>
                        <td><code>nodes</code></td>
                        <td><code>array</code></td>
                        <td><code>false</code></td>
                        <td>
                            Optional list of nodes that should not trigger outside click event.
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4>Return value</h4>
            <p>Hook returns React ref object that should be passed to element on which outside clicks should be captured.</p>
            <Footer currentPage="useOnClickOutside" />

        </>
    )
}

export default UseOnClickOutsideUI