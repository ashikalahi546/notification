const Modal = ({ closeNotification }) => {
    return (
        <div className="bg-blue-500 h-96 w-96 rounded-lg  text-white flex flex-col justify-center items-center mt-5 relative">

            <div onClick={ closeNotification} className="absolute top-1 text-3xl right-3 cursor-pointer">x</div>
            <p>hellow</p>
        </div>
    );
};

export default Modal;