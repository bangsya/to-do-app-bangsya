// import { useState } from "react";

export default function HumburgerMenu({ isOpen, handleClick, buttonRef }) {
    // const [isOpen, setIsOpen] = useState(false);

    const humburgerLine = `block w-8 h-1 bg-white rounded-full transition-all duration-400 transform`;

    return (
        <button ref={buttonRef} className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={handleClick}>
            <span className={`${humburgerLine} ${isOpen ? "translate-y-2 rotate-45" : ""}`}></span>
            <span className={`${humburgerLine} ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`${humburgerLine} ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
        </button>
    );
}