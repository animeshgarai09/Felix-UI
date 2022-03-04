import { useToast, Button } from "@felix-ui"
const ToastUI = () => {

    const toast = useToast()

    const success = () => {
        toast({
            status: "success",
            message: "Data uploaded to the server.",
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
        <div>
            <Button onClick={success}>success</Button>
            <Button onClick={error} theme="danger">success</Button>
            <Button onClick={warning} theme="warning">success</Button>
            <Button onClick={info} theme="info">success</Button>
        </div>
    )
}

export default ToastUI