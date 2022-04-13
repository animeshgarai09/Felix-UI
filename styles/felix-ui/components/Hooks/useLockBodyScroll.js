import { useState, useLayoutEffect, useRef } from "react";
export const useLockBodyScroll = () => {
    const [status, setStatus] = useState()
    const originalStyle = useRef()

    useLayoutEffect(() => {
        // Prevent scrolling on mount
        if (status)
            document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        else
            document.body.style.overflow = originalStyle.current;

        return () => (document.body.style.overflow = originalStyle.current);
    }, [status]); // Empty array ensures effect is only run on mount and unmount

    useLayoutEffect(() => {
        // Get original body overflow
        originalStyle.current = window.getComputedStyle(document.body).overflow;
    }, [])

    return {
        status,
        lock: () => setStatus(true),
        unlock: () => setStatus(false),
        toggle: () => setStatus(prev => !prev)
    }
}