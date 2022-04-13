
import { useEffect } from "react";

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

export const useOnClickOutside = ({ ref, handler }) => {
    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        DEFAULT_EVENTS.forEach((event) => document.addEventListener(event, listener));
        return () => {
            DEFAULT_EVENTS.forEach((event) => document.removeEventListener(event, listener));
        };
    }, [ref, handler]);
}