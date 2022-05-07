import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import { Button, useLockBodyScroll } from "@felix-ui"
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
                <Button onClick={toggle} size="md">Open modal</Button>
                {
                    status && <h3>Hey! you just locked body scroll</h3>
                }
            </div>
        </>
    )
}

export default UseLockBodyScrollUI