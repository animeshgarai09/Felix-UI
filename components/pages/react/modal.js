import { Button, Modal, ModalBody } from "@felix-ui"
import { useState } from "react"
const ModalUI = () => {
    const [isModalOpen, setModalState] = useState(false)
    return (
        <>
            <Button onClick={() => setModalState(prev => !prev)}>Modal</Button>
            <Modal
                size="md"
                isOpen={isModalOpen}
                onClose={() => setModalState(false)}
                title="My Playlists"
                closeOnOverlayClick={false}
            >
                <ModalBody>
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero ex et ipsum quam itaque illo, modi corrupti aspernatur earum cum tempora quae dicta, commodi non nemo hic? Laudantium, odit?</p>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ModalUI
