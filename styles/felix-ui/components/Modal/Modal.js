import styles from "./modal.module.scss"
import ReactDOM from "react-dom"
import IconButton from "../IconButton/IconButton";
import { RiCloseFill } from "react-icons/ri"
import { useOnClickOutside } from "../Hooks/useOnClickOutside";
import { useCallback, useEffect, useRef } from "react";
import { useLockBodyScroll } from "../Hooks/useLockBodyScroll";
import classNames from "classnames";

const Modal = (
    {
        size = "md",
        title,
        isOpen,
        blockScrollOnMount = true,
        closeOnEsc = true,
        closeOnOverlayClick = true,
        onClose,
        overlayClassName,
        headerClassName,
        children,
        onOpenFocus,
    }) => {

    const contentRef = closeOnOverlayClick ? useOnClickOutside({ handler: onClose }) : useRef()
    const bodyLock = useLockBodyScroll()

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            onClose()
        }
    }, []);

    useEffect(() => {
        isOpen && blockScrollOnMount && bodyLock.lock()
        closeOnEsc && document.addEventListener("keydown", escFunction);
        isOpen && onOpenFocus && onOpenFocus.current.focus()

        return () => {
            closeOnEsc && document.removeEventListener("keydown", escFunction);
            blockScrollOnMount && bodyLock.unlock()
        };
    }, [isOpen, blockScrollOnMount, closeOnEsc, escFunction]);

    const containerClass = classNames(
        styles.container,
        styles[size],
        overlayClassName
    )
    const headerClass = classNames(
        styles.header,
        headerClassName,
    )
    if (isOpen) {
        return ReactDOM.createPortal(
            <>
                <div className={containerClass} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div ref={contentRef} className={styles.content}>
                        <div className={headerClass}>
                            <span className={styles.title}>{title}</span>
                            <IconButton icon={<RiCloseFill />} onClick={onClose} className={styles.close} />
                        </div>
                        {
                            !Array.isArray(children) && children?.type?.displayName === "ModalBody" && children
                        }
                    </div>
                </div>
            </>,
            document.querySelector("#felix-modal-root")
        );
    } else return null;
};

const ModalBody = ({ className, children }) => {
    const bodyClass = classNames(
        styles.body,
        className,
    )
    return (
        <div className={bodyClass}>
            {children}
        </div>
    )
}

ModalBody.displayName = "ModalBody"

export { Modal, ModalBody };