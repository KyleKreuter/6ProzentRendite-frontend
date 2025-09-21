import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";

const Modal = ({ isOpen, children, onClickOutside }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleKey = (e) => e.key === "Escape" && onClickOutside();
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClickOutside]);

    useEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => setShow(true));
        } else {
            setShow(false);
        }
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget && onClickOutside) {
            onClickOutside();
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-filter transition-all duration-200 ${show ? "backdrop-blur-md" : "backdrop-blur-0"}`}
            onClick={handleBackdropClick}
        >
            {children}
        </div>,
        document.body
    );
};

export default Modal;