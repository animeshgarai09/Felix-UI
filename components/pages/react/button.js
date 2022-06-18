import { Button, ButtonGroup, Alert } from "@felix-ui"
import { Codeblock } from 'components/utils'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import Footer from "components/footer"
import styles from '@styles/documentation.module.scss'

const ButtonUI = () => {

    return (
        <>
            <p>The Button component is used to trigger an action or event, such as submitting a
                form, opening a dialog, canceling an action, or performing a delete operation.</p>

            <h4>Import</h4>
            <p >Felix UI exports 2 button-related components:</p>
            <ul>
                <li><code>Button</code>: The button element.</li>
                <li><code>ButtonGroup</code>: A wrapper to group button together.</li>
            </ul>
            <Codeblock lang="jsx">
                {`import { Button, ButtonGroup } from "react-felix-ui"`}
            </Codeblock>

            <h4>Usage</h4>
            <div className={styles.element_container}>
                <Button isTransform={false}>Submit</Button>
            </div>
            <Codeblock lang="jsx">
                {`<Button>Submit</Button>`}
            </Codeblock>

            <h4>Button Colors</h4>
            <p>Use the <code>color</code> prop to change color of the button. you can change buttons to predefined colors. &nbsp;
                <code>primary</code>, <code>info</code>, <code>danger</code>, <code>warning</code>, <code>success</code>, or <code>gray</code>.</p>
            <div className={`${styles.element_container} ${styles.align_center}`}>
                <Button color='primary'>Primary</Button>
                <Button color='info'>Info</Button>
                <Button color='danger'>Danger</Button>
                <Button color='warning'>Warning</Button>
                <Button color='success'>Success</Button>
                <Button color='gray'>Gray</Button>
            </div>
            <Codeblock lang="jsx">
                {
                    `<Button color='primary'>Info</Button>
<Button color='info'>Info</Button>
<Button color='danger'>Danger</Button>
<Button color='warning'>Warning</Button>
<Button color='success'>Success</Button>
<Button color='gray'>Gray</Button>`
                }
            </Codeblock>

            <h4>Button Sizes</h4>
            <p>Use the <code>size</code> prop to change the size of the button. You can set the value to&nbsp;
                <code>xs</code>, <code>sm</code>, <code>md</code>, or <code>lg</code>.</p>
            <div className={`${styles.element_container} ${styles.align_center}`}>
                <Button size='xs'>Extra small</Button>
                <Button size='sm'>Small</Button>
                <Button size='md' >Medium</Button>
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

            <h4>Button Variants</h4>
            <p>Use the <code>variant</code> prop to change the visual style of the Button. You can set the
                value to <code>outline</code>, <code>ghost</code>, <code>disable</code>, or <code>link</code>.</p>

            <div className={`${styles.element_container} ${styles.align_center}`}>
                <Button variant='outline'>Submit</Button>
                <Button variant='ghost'>Submit</Button>
                <Button variant='disable'>Submit</Button>
                <Button variant='link'>Submit</Button>
            </div>
            <Codeblock lang="jsx">

                {
                    `<Button variant='outline'>Submit</Button>
<Button variant='ghost'>Submit</Button>
<Button variant='link'>Submit</Button>`
                }
            </Codeblock>

            <h4>Button with icons</h4>
            <p>You can add icons to the Button component using the <code>leftIcon</code> & <code>rightIcon</code> prop.</p>
            <Alert
                status='warning'
                title='Note: The leftIcon and rightIcon prop values should be react elements NOT strings.'
                className={styles.alert}
            />
            <div className={`${styles.element_container} ${styles.align_center}`}>
                <Button leftIcon={<FiChevronLeft />} >Back</Button>
                <Button rightIcon={<FiChevronRight />} >Get started</Button>
            </div>

            <Codeblock lang="jsx">
                {`<Button leftIcon={<FiChevronLeft />} >Back</Button>
<Button rightIcon={<FiChevronRight />} >Get started</Button>`}
            </Codeblock>

            <h4>Button loading state</h4>
            <p>Pass the <code> isLoading </code> prop to show its loading state. By default, the button will show a loader.</p>

            <div className={`${styles.element_container} ${styles.align_center}`}>
                <Button size="lg" isLoading>long text</Button>
            </div>

            <Codeblock lang="jsx">
                {`<Button size="lg" isLoading>long text</Button>`}
            </Codeblock>

            <h4>Button Group</h4>
            <p>
                You can use the <code>ButtonGroup</code> component to group buttons. When you use the ButtonGroup component, it allows you to:
            </p>

            <div className={`${styles.element_container} ${styles.align_center}`}>
                <ButtonGroup size="sm" theme="primary" isOnClickActive>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>20</Button>
                </ButtonGroup>
            </div>

            <Codeblock lang="jsx">
                {`<ButtonGroup size="sm" theme="primary" isOnClickActive>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
    <Button>20</Button>
</ButtonGroup>`}
            </Codeblock>

            <h4>Button Group as radio buttons</h4>
            <p>
                You can use the <code>ButtonGroup</code> component to make group of buttons as radio inputs with <code>select</code> prop.
            </p>

            <div className={`${styles.element_container} ${styles.align_center}`}>
                <ButtonGroup size="sm" theme="primary">
                    <Button selected>Male</Button>
                    <Button>Female</Button>
                </ButtonGroup>
            </div>

            <Codeblock lang="jsx">
                {`<ButtonGroup size="sm" theme="primary">
    <Button selected>Male</Button>
    <Button>Female</Button>
</ButtonGroup>`}
            </Codeblock>

            <Footer currentPage="Button" />
        </>
    )
}

export default ButtonUI
