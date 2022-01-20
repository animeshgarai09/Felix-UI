import { Alert } from "../../styles/felix-ui"
const AlertUI = () => {
    return (
        <div>
            <Alert options={{
                status: 'error',
                title: 'Did you know something',
                description: 'A lot has to be talked about this component'
            }} />
        </div>
    )
}

export default AlertUI
