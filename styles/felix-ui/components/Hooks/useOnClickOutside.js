
import { useEffect, useRef } from "react";

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

export const useOnClickOutside = ({ handler, nodes }) => {
    const element = useRef()
    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!element.current
                || element.current.contains(event.target)
                || (nodes && nodes.some((item) => item.contains(event.target)))) {
                return;
            }

            handler(event);
        };
        DEFAULT_EVENTS.forEach((event) => document.addEventListener(event, listener));
        return () => {
            DEFAULT_EVENTS.forEach((event) => document.removeEventListener(event, listener));
        };
    }, [element, handler]);
    return element
}