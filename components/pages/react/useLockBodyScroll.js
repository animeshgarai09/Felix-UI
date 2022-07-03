import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import { Button, useLockBodyScroll } from "@felix-ui"
import Footer from "components/footer"

const UseLockBodyScrollUI = () => {
    const { status, toggle } = useLockBodyScroll()
    return (
        <>
            <p><code>useLockBodyScroll</code> locks scroll at current position by setting document.body overflow to hidden.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { useLockBodyScroll } from "react-felix-ui"`}
            </Codeblock>
            <h4>Usage</h4>
            <div className={styles.element_container}>
                <Button onClick={toggle} size="md">{status ? "Unlock Scroll" : "Lock Scroll"}</Button>
            </div>
            <Codeblock lang="jsx">
                {`function Example() {
    const { status, toggle } = useLockBodyScroll()
    return (
        <>
            <Button onClick={toggle} size="md">{status ? "Unlock Scroll" : "Lock Scroll"}</Button>
        </>
    )
}`}
            </Codeblock>

            <h4>Return value</h4>
            <p><code>useLockBodyScroll</code> hook return a object with methods which gives status and functions to change state.</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>status</code></td>
                        <td><code>boolean</code></td>
                        <td>
                            Status of the hook. Returns <code>true</code> if scroll is locked.
                        </td>
                    </tr>
                    <tr>
                        <td><code>lock</code></td>
                        <td><code>function</code></td>
                        <td>
                            Function to lock scroll in current window.
                        </td>
                    </tr>
                    <tr>
                        <td><code>unlock</code></td>
                        <td><code>function</code></td>
                        <td>
                            Function to unlock scroll in current window.
                        </td>
                    </tr>
                    <tr>
                        <td><code>toggle</code></td>
                        <td><code>function</code></td>
                        <td>
                            Function which can toggle between lock state.
                        </td>
                    </tr>
                </tbody>
            </table>
            <Footer currentPage="useLockBodyScroll" />

        </>
    )
}

export default UseLockBodyScrollUI