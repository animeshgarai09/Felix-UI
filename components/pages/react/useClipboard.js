import { Codeblock } from 'components/utils'
import styles from '@styles/documentation.module.scss'
import { Button, useClipboard } from "@felix-ui"
import Footer from "components/footer"

const UseClipboardUI = () => {
    const clipboard = useClipboard({ timeout: 500 })
    return (
        <>
            <p> <code> useClipboard</code> is a custom hook that handles copying content to clipboard. This hook is a wrapper around browser <code> navigator.clipboard</code> API with feedback timeout.</p>
            <h4>Import</h4>
            <Codeblock lang="jsx">
                {`import { useClipboard } from "react-felix-ui"`}
            </Codeblock>
            <h4>Usage</h4>
            <p>useClipboard hook provides interface to work with <code>navigator.clipboard: </code> </p>
            <div className={styles.element_container}>
                <Button
                    color={clipboard.hasCopied ? 'gray' : 'primary'}
                    onClick={() => clipboard.copy("Hello World !")}
                    isTransform={false}
                >{clipboard.hasCopied ? 'Copied' : 'Copy'}</Button>
            </div>
            <Codeblock lang="jsx">
                {`function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
        color={clipboard.hasCopied ? 'gray' : 'primary'}
        onClick={() => clipboard.copy("Hello World !")}
        isTransform={false}
    >{clipboard.hasCopied ? 'Copied' : 'Copy'}</Button>
  );
}`}
            </Codeblock>
            <h4>Arguments</h4>
            <p>The <code>useClipboard</code> hook takes the following arguments:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>timeout</code></td>
                        <td><code>number</code></td>
                        <td><code>false</code></td>
                        <td>
                            Timeout as a number sets <code>hasCopied</code> property value which turns <code>true</code> after <code>copy</code> function call and turn to <code>false</code> once timeout completes.
                        </td>
                    </tr>
                    <tr>
                        <td><code>onCopy</code></td>
                        <td><code>function</code></td>
                        <td><code>false</code></td>
                        <td>
                            Function to trigger after <code>copy</code> function call.
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4>Return value</h4>
            <p>The <code>useClipboard</code> hook returns an object with the following fields:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>copy</code></td>
                        <td><code>function</code></td>
                        <td></td>
                        <td>
                            Function to trigger <code>copy</code> with text. Function accepts string argument.
                        </td>
                    </tr>
                    <tr>
                        <td><code>hasCopied</code></td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                        <td>
                            If <code>true</code>, the content has been copied within the last <code>timeout</code> milliseconds. That is, it is set to <code>true</code> right after onCopy is called, and <code>false</code> after <code>timeout</code> has passed.
                        </td>
                    </tr>
                </tbody>
            </table>
            <Footer currentPage="useClipboard" />

        </>
    )
}

export default UseClipboardUI