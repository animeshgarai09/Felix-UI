import { Alert } from "@felix-ui"
import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import Footer from "components/footer"
const AlertUI = () => {
    return (
        <>
            <p className={styles.des}>Alerts are used to communicate a state that affects a system, feature or page.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { Alert } from "react-felix-ui"`}
            </Codeblock>

            <h4>Usage</h4>
            <div className={`${styles.element_container} ${styles.column}`}>
                <Alert
                    status='success'
                    title='Data uploaded to the server. Fire on!'
                />
            </div>
            <Codeblock lang="jsx">
                {`<Alert
    status='success'
    title='Data uploaded to the server. Fire on!'
/>`}
            </Codeblock>

            <h4>Status</h4>
            <p>Change the status of the alerts by passing the <code>status</code> prop. This affects the
                color scheme and icon used. Alert supports <code>error</code>, <code>success</code>, <code>warning</code>, and <code>info</code> statuses.</p>

            <div className={`${styles.element_container} ${styles.column}`}>
                <Alert
                    status='error'
                    title='There was an error processing your request!'
                />
                <Alert
                    status='success'
                    title='Data uploaded to the server. Fire on!'
                />
                <Alert
                    status='warning'
                    title='Seems your account is about to expire, upgrade now'
                />
                <Alert
                    status='info'
                    title='Update is ready to be installed.'
                />
            </div>

            <Codeblock lang="jsx">
                {`<Alert
    status='danger'
    title='There was an error processing your request!'
/>
<Alert
    status='success'
    title='Data uploaded to the server. Fire on!'
/>
<Alert
    status='warning'
    title='Seems your account is about to expire, upgrade now'
/>
<Alert
    status='info'
    title='Update is ready to be installed.'
/>`}
            </Codeblock>
            <h4>Description</h4>
            <p>isOnClickActive description can be added to alert component with <code>description</code> prop.</p>
            <div className={`${styles.element_container} ${styles.column}`}>
                <Alert
                    status='warning'
                    title='There was an error processing your request'
                    closeButton
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi <a href="#">cumque officiis </a>  exercitationem iure commodi ipsa quis, doloremque consectetur distinctio natus! Voluptate magnam debitis, exercitationem fuga amet hic voluptatibus repellendus labore?
                </Alert>
            </div>
            <Codeblock lang="jsx">
                {`<Alert
    status='warning'
    title='There was an error processing your request'
    closeButton
>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi <a href="#">cumque officiis </a>  
    exercitationem iure commodi ipsa quis,doloremque consectetur distinctio natus! Voluptate 
    magnam debitis, exercitationem fuga amet hic voluptatibus repellendus labore?
</Alert>`}
            </Codeblock>
            <Footer currentPage='Alert' />
        </>
    )
}

export default AlertUI
