import { useToast, Button } from "@felix-ui"
import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import Footer from "components/footer"

const ToastUI = () => {

    const toast = useToast()

    const success = () => {
        toast({
            status: "success",
            message: "We've created your account.",
            duration: 5
        })
    }
    const error = () => {
        toast({
            status: "error",
            message: "Data uploaded to the server.",
        })
    }
    const warning = () => {
        toast({
            status: "warning",
            message: "Data uploaded to the server.",
        })
    }
    const info = () => {
        toast({
            status: "info",
            message: "Data uploaded to the server.",
        })
    }
    return (
        <>
            <p>The toast is used to show alerts on top of an overlay. The toast will close itself when the close button is clicked, or after a timeout — the default is 3 seconds. The toast component is used to give feedback to users after an action has taken place.</p>
            <p>Toasts can be configured to appear at either the top or the bottom of an application window, and it is possible to have more than one toast onscreen at a time.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { useToast } from "react-felix-ui"`}
            </Codeblock>
            <h4>Usage</h4>
            <div className={styles.element_container}>
                <Button onClick={success}>Show toast</Button>
            </div>
            <Codeblock lang="jsx">
                {`function ToastExample() {
    const toast = useToast()
    return (
        <Button
            onClick={() =>
                toast({
                status: 'success',
                message: "We've created your account.",
                duration: 5,
                })
            }
        >
        Show Toast
        </Button>
    )
}`}
            </Codeblock>
            <h4>Status</h4>
            <p>You can use status to change the color of your toasts. Available statuses are <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>.</p>
            <div className={styles.element_container}>
                <Button onClick={success}>Show success toast</Button>
                <Button onClick={error} color="danger">Show danger toast</Button>
                <Button onClick={warning} color="warning">Show warning toast</Button>
                <Button onClick={info} color="info">Show info toast</Button>
            </div>
            <Codeblock lang="jsx">
                {`function ToastExample() {
    const toast = useToast()
    return (
        <Button
            onClick={() =>
                toast({
                status: 'success', // You can change props to show different style toast
                message: "We've created your account.",
                duration: 5,
                })
            }
        >
        Show Toast
        </Button>
    )
}`}
            </Codeblock>
            <Footer currentPage="Toast" />

        </>
    )
}

export default ToastUI