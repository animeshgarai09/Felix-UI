import { Button, Modal, ModalBody } from "@felix-ui"
import { useState } from "react"
import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import Footer from "components/footer"

const ModalUI = () => {
    const [isModalOpen, setModalState] = useState(false)
    const [isModalOpen2, setModalState2] = useState(false)
    return (
        <>
            <p>A modal dialog is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is <strong>inert</strong>, meaning that users cannot interact with it.</p>
            <h4>Import</h4>
            <p>Felix exports 2 components to help you create any modal dialog.</p>
            <ul>
                <li><code>Modal</code>: The wrapper that provides context for its children.</li>
                <li><code>ModalBody</code>: The wrapper that houses the modal's main content.</li>
            </ul>
            <Codeblock lang="jsx">
                {`import { Modal, ModalBody } from "react-felix-ui"`}
            </Codeblock>
            <h4>Usage</h4>
            <p>When the modal opens, focus is sent into the modal and set to the first tabbable element. If there are no tabbled elements, focus is set on <code>ModalContent</code>.</p>
            <div className={styles.element_container}>
                <Button onClick={() => setModalState(prev => !prev)}>Open modal</Button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalState(false)}
                    title="My Playlists"
                >
                    <ModalBody>
                        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
                        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
                    </ModalBody>
                </Modal>
            </div>
            <Codeblock lang="jsx">
                {`function BasicUsage() {
    const [isModalOpen, setModalState] = useState(false)
    return (
        <>
            <Button onClick={() => setModalState(prev => !prev)}>Open modal</Button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalState(false)}
                title="My Playlists"
            >
                <ModalBody>
                    <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
                    <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
                </ModalBody>
            </Modal>
        </>
    )
}
`}
            </Codeblock>

            <h4>Customaization</h4>
            There are few coustomization that can be pplied to <code>Modal</code> component.
            <ul>
                <li><code>size</code> : Modal container size can be changed with this prop. Available sizes are <code>xs</code>,<code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>xxl</code>, <code>full</code></li>
                <li><code>blockScrollOnMount</code> : If <code>false</code>, on modal open page is left scrollable. Default is <code>true</code></li>
                <li><code>closeOnOverlayClick</code> : If <code>false</code>, on overlay click modal will not close.</li>
            </ul>
            <div className={styles.element_container}>
                <Button onClick={() => setModalState2(prev => !prev)}>Open modal</Button>
                <Modal
                    size="xxl"
                    isOpen={isModalOpen2}
                    onClose={() => setModalState2(false)}
                    title="My Playlists"
                    blockScrollOnMount={false}
                    closeOnOverlayClick={false}
                >
                    <ModalBody>
                        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
                        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
                    </ModalBody>
                </Modal>
            </div>
            <Codeblock lang="jsx">
                {`function BasicUsage() {
    const [isModalOpen, setModalState] = useState(false)
    return (
        <>
            <Button onClick={() => setModalState(prev => !prev)}>Open modal</Button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalState(false)}
                title="My Playlists"
                size="xxl"
                blockScrollOnMount={false}
                closeOnOverlayClick={false}
            >
                <ModalBody>
                    <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
                    <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
                </ModalBody>
            </Modal>
        </>
    )
}
`}
            </Codeblock>
            <Footer currentPage="Modal" />

        </>
    )
}

export default ModalUI
