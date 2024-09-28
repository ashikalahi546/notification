"use client"
import { useEffect, useRef, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Modal from "./Model";

const NotificationTwo = () => {
    const notificatonRefs = useRef(null)

    const [open, setOpen] = useState(false)
    const handleNotification = (id) => {
        setOpen(id)

    }

    const handleClose = () => {
        setOpen(false)
    }
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (notificatonRefs.current && !notificatonRefs.current.contains(event.target))
                handleClose()
        }

        if (open) {
            document.addEventListener('mousedown', handleOutsideClick)
        }
        return (() => {
            document.removeEventListener('mousedown', handleOutsideClick)
        })
    }, [open])

    return (
        <div className="flex flex-col items-center justify-center ">
            <button ref={notificatonRefs} onClick={() => handleNotification(!open)}>
                <IoMdNotificationsOutline size={50} />
            </button>
            {open && <Modal handleClose={handleClose} />}
        </div>
    );
};

export default NotificationTwo;