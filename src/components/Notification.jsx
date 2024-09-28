"use client";
import { useState, useRef, useEffect } from "react";
import Modal from "./Model";

export default function Notification() {
  const [notification, setNotification] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // controls opacity/visibility
  const notificationRef = useRef(null);

  const handleNotification = (open) => {
    if (open) {
      setNotification(true);
      setTimeout(() => setIsVisible(true), 100); // Delay for smooth opacity transition
    } else {
      setIsVisible(false);
      setTimeout(() => setNotification(false), 300); // Match duration with transition time
    }
  };

  const closeNotification = () => {
    handleNotification(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        closeNotification();
      }
    };
    if (notification) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notification]);

  return (
    <div className="flex flex-col items-center justify-center my-20">
      <button
        onClick={() => handleNotification(!notification)}
        className="bg-orange-600 px-10 text-white text-lg py-2.5 rounded-md"
      >
        Click
      </button>

      {notification && (
        <div
          ref={notificationRef}
          className={`transition-all duration-300 ease-in-out transform ${isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
            }`}
        >
          <Modal closeNotification={closeNotification} />
        </div>
      )}
    </div>
  );
}
