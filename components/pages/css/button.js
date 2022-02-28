import { Codeblock } from 'components/utils'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { BiHomeCircle } from 'react-icons/bi'
import Footer from "components/footer"
import styles from '@styles/documentation.module.scss'

const ButtonUI = () => {
    return (
        <>
            <p classNameName={styles.des}>The Button component is used to trigger an action or event, such as submitting a
                form, opening a dialog, canceling an action, or performing a delete operation.</p>

            <h4>Examples</h4>
            <p>Felix UI includes several predefined button styles, each serving its own semantic purpose.</p>
            <div className={styles.element_container}>
                <button className="btn btn--primary">Primary</button>
                <button className="btn btn--info">Info</button>
                <button className="btn btn--success">Success</button>
                <button className="btn btn--warning">Warning</button>
                <button className="btn btn--error">Error</button>
            </div>
            <Codeblock lang="html">
                {`<button className="btn btn--primary">Primary</button>
<button className="btn btn--info">Info</button>
<button className="btn btn--success">Success</button>
<button className="btn btn--warning">Warning</button>
<button className="btn btn--error">Error</button>`}
            </Codeblock>
            <h4>Button variants</h4>
            <div className={styles.element_container}>
                <button className="btn btn--primary btn--round">Primary</button>
                <button className="btn btn--info btn--outline">Info</button>
                <button className="btn btn--warning btn--round btn--outline">Warning</button>
                <button className="btn btn--error btn--ghost">Error</button>
                <button className="btn btn--success btn--link">Success</button>
            </div>
            <Codeblock lang="html">

                {`<button className="btn btn--primary btn--round">Primary</button>
<button className="btn btn--info btn--outline">Info</button>
<button className="btn btn--warning btn--round btn--outline">Warning</button>
<button className="btn btn--error btn--ghost">Error</button>
<button className="btn btn--success btn--link">Success</button>`}
            </Codeblock>

            <Footer currentPage='Button' />
        </>
    )
}

export default ButtonUI
