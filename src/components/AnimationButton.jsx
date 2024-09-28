"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "./Model";

const AnimationButton = () => {
    const [open, setOpen] = useState(false);
    const modal = useRef(null)
    const handleOpenModal = () => {
        setOpen(!open);
    };

    const handleCloseModal = () => {
        setTimeout(() => {
            setOpen(false)
        }, 100)
    };

    const handleOutSideClick = (event) => {
        if (modal.current && !modal.current.contains(event.target)) {
            handleCloseModal()
        }
    }

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleOutSideClick)
        }

        return () => {
            document.removeEventListener('mousedown', handleOutSideClick)
        }
    }, [open])

    return (
        <div className="flex flex-col items-center justify-center my-20">
            <button
                onClick={handleOpenModal}
                className="bg-orange-600 px-10 text-white text-lg py-2.5 rounded-md"
            >
                Click
            </button>

            <div ref={modal}
                className={`transform transition-all duration-500 ease-in-out ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}

            >
                <Modal handleCloseModal={handleCloseModal} />
            </div>
        </div>
    );
};

export default AnimationButton;
