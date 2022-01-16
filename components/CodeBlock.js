import { CodeBlock, dracula } from "react-code-blocks"

const codeBlock = ({ children }) => {
    return (
        <CodeBlock className='hello'
            text={children}
            language='jsx'
            showLineNumbers={false}
            theme={dracula}
        />
    )
}

export default codeBlock
