import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext/TodoContext';
import './Modal.css';

function Modal({ children }) {
    const { setOpenModal } = useContext(TodoContext);
    const [isTextSelected, setIsTextSelected] = useState(false);

    useEffect(() => {
        // Add event handler to document to detect when text is selected.
        const handleDocumentSelectionChange = () => {
            setIsTextSelected(window.getSelection().toString() !== '');
        };

        document.addEventListener('selectionchange', handleDocumentSelectionChange);

        return () => {
            // Clean up event handler.
            document.removeEventListener('selectionchange', handleDocumentSelectionChange);
        };
    }, []);

    const handleClose = (e) => {
        if (!isTextSelected && e.target === e.currentTarget) {
            // Close modal when clicking outside of it and when no text is selected.
            setOpenModal(false);
        }
    };

    return ReactDOM.createPortal(
        <div className="ModalBackground" onClick={handleClose}>
            <div className="ModalContainer">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };