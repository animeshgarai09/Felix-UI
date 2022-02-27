import { Button } from "@felix-ui"
import { Codeblock } from 'components/utils'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { BiHomeCircle } from 'react-icons/bi'
import Footer from "components/footer"
import styles from '@styles/documentation.module.scss'

const ButtonUI = () => {
    return (
        <>
            <p className={styles.des}>The Button component is used to trigger an action or event, such as submitting a
                form, opening a dialog, canceling an action, or performing a delete operation.</p>

            <h4>Import</h4>
            <Codeblock lang="jsx">

                {`import { Button } from "@felix-ui"`}
            </Codeblock>
            <h4>Usage</h4>
            <div className={styles.element_container}>
                <Button>Submit</Button>
            </div>
            <Codeblock lang="jsx">

                {`<Button>Submit</Button>`}
            </Codeblock>
            <h4>Button Sizes</h4>
            <p>Use the <code>size</code> prop to change the size of the button. You can set the value to
                <code>xs</code>, <code>sm</code>, <code>md</code>, or <code>lg</code>.</p>
            <div className={`${styles.element_container} ${styles.align_center}`}>
                <Button size='xs'>Extra small</Button>
                <Button size='sm'>Small</Button>
                <Button size='md'>Medium</Button>
                <Button size='lg'>Large</Button>
            </div>

            <Codeblock lang="jsx">

                {
                    `<Button size='xs'>Extra small</Button>
<Button size='sm'>Small</Button>
<Button size='md'>Medium</Button>
<Button size='lg'>Large</Button>`
                }
            </Codeblock>
            <h4>Button variants</h4>
            <p>Use the <code>variant</code> prop to change the visual style of the Button. You can set the
                value to <code>round</code>, <code>outline</code>, <code>ghost</code>, or <code>link</code>.</p>

            <div className={`${styles.element_container} ${styles.align_center}`}>
                <Button variant='round'>Submit</Button>
                <Button variant='outline'>Submit</Button>
                <Button variant='ghost'>Submit</Button>
                <Button variant='link'>Submit</Button>
            </div>
            <Codeblock lang="jsx">

                {
                    `<Button variant='round'>Submit</Button>
<Button variant='outline'>Submit</Button>
<Button variant='ghost'>Submit</Button>
<Button variant='link'>Submit</Button>`
                }
            </Codeblock>
            <h4>Button with icon</h4>
            <p>You can add icons to the Button component using the <code>icon</code> prop, and change its position using <code>direction</code> prop.</p>

            <div className={`${styles.element_container} ${styles.align_center}`}>
                <Button leftIcon={<FiChevronLeft />} >Back</Button>
                <Button leftIcon={<BiHomeCircle />}></Button>
                <Button rightIcon={<FiChevronRight />} >Get started</Button>
            </div>

            <Codeblock lang="jsx">

                {`<Button leftIcon={<FiChevronLeft />} >Back</Button>
<Button leftIcon={<BiHomeCircle />}></Button>
<Button rightIcon={<FiChevronRight />} >Get started</Button>`}
            </Codeblock>
            <Footer previous='Badge' next='Card' />
        </>
    )
}

export default ButtonUI
