import { Alert } from "@felix-ui"
import { Codeblock } from '../utils'
import styles from '../../styles/documentation.module.scss'
import Footer from "../footer/footer"
const AlertUI = () => {
    return (
        <>
            <h1>Alert</h1>
            <p>Alerts are used to communicate a state that affects a system, feature or page.</p>
            <h4>Import</h4>
            <Codeblock>
                {`import { Alert } from "@felix-ui"`}
            </Codeblock>

            <h4>Usage</h4>
            <div className={`${styles.element_container} ${styles.column}`}>
                <Alert options={{
                    status: 'success',
                    title: 'Data uploaded to the server. Fire on!',
                    // description: 'A lot has to be talked about this component'
                }} />
            </div>
            <Codeblock>
                {`<Alert options={{
    status: 'success',
    title: 'Data uploaded to the server. Fire on!',
}} />`}
            </Codeblock>

            <h4>Status</h4>
            <p>Change the status of the alerts by passing the <code>status</code> prop. This affects the
                color scheme and icon used. Alert supports <code>error</code>, <code>success</code>, <code>warning</code>, and <code>info</code> statuses.</p>

            <div className={`${styles.element_container} ${styles.column}`}>
                <Alert options={{
                    status: 'error',
                    title: 'There was an error processing your request',
                    // description: 'A lot has to be talked about this component'
                }} />
                <Alert options={{
                    status: 'success',
                    title: 'Data uploaded to the server. Fire on!',
                    // description: 'A lot has to be talked about this component'
                }} />
                <Alert options={{
                    status: 'warning',
                    title: 'Seems your account is about to expire, upgrade now',
                    // description: 'A lot has to be talked about this component'
                }} />
                <Alert options={{
                    status: 'info',
                    title: 'Update is ready to be installed.',
                    // description: 'A lot has to be talked about this component'
                }} />
            </div>

            <Codeblock>
                {`<Alert options={{
    status: 'error',
    title: 'There was an error processing your request',
}} />
<Alert options={{
    status: 'success',
    title: 'Data uploaded to the server. Fire on!',
}} />
<Alert options={{
    status: 'warning',
    title: 'Seems your account is about to expire, upgrade now',
}} />
<Alert options={{
    status: 'info',
    title: 'Update is ready to be installed.',
}} />`}
            </Codeblock>
            <h4>Description</h4>
            <p>A description can be added to alert component with <code>description</code> prop.</p>
            <div className={`${styles.element_container} ${styles.column}`}>
                <Alert options={{
                    status: 'error',
                    title: 'There was an error processing your request',
                    description: 'Request can not be processed due to insufficient funds in account.'
                }} />
            </div>
            <Codeblock>
                {`<Alert options={{
    status: 'error',
    title: 'There was an error processing your request',
    description: 'Request can not be processed due to insufficient funds in account.'
}} />`}
            </Codeblock>
            <Footer previous={['Typography', '/documentation/typography']} next={['Avatar', '/documentation/avatar']} />
        </>
    )
}

export default AlertUI
