import { useState } from "react"

export const useClipboard = ({ timeout = 1000, onCopy }) => {

    const [hasCopied, setHasCopied] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const handleCopyDone = () => {
        clearTimeout(timeoutId);
        setHasCopied(true);
        onCopy && onCopy();
        setTimeoutId(setTimeout(() => setHasCopied(false), timeout));
    };

    const copy = (text) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(text)
                .then(() => handleCopyDone())
                .catch(err => {
                    clearTimeout(timeoutId);
                    setHasCopied(false);
                })
        } else {
            return Promise.reject('The Clipboard API is not available.');
        }
    }

    return { hasCopied, copy }
}