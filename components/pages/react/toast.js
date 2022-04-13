import { useToast, Button } from "@felix-ui"
const ToastUI = () => {

    const toast = useToast()

    const success = () => {
        toast({
            status: "success",
            message: "Data uploaded to the server.",
            duration: 1
        })
    }
    const error = () => {
        toast({
            status: "error",
            message: "Data uploaded to the server.",
            duration: 100
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
            <Button onClick={error} color="danger">success</Button>
            <Button onClick={warning} color="warning">success</Button>
            <Button onClick={info} color="info">success</Button>
        </div>
    )
}

export default ToastUI