import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router";

export default function Menu({ isOpen, setIsOpen, buttonRef }) {
    const navRef = useRef(null);
    const handleClickOutside = useCallback((e) => {
        if (navRef.current && !navRef.current.contains(e.target) && (!buttonRef.current || !buttonRef.current.contains(e.target))) {
            setIsOpen(false);
        }
    }, [setIsOpen, buttonRef]);

    useEffect( () => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, handleClickOutside]);

    return (
        <nav ref={navRef} className={`absolute top-16 right-10 max-w-[250px] w-full bg-blue-500 rounded-md shadow-xl border border-slate-200 origin-top-right md:scale-100 md:static md:flex md:items-center md:w-auto transform transition-all duration-500 ${isOpen ? "scale-100" : "scale-0"}`}>
            <ul className="md:flex text-center">
                <li className="p-3 md:p-0 md:ml-4 font-medium"><Link to="/" className="hover:text-blue-900">Home</Link></li>
                <li className="p-3 md:p-0 md:ml-4 font-medium"><Link to="/about" className="hover:text-blue-900">About</Link></li>
                <li className="p-3 md:p-0 md:ml-4 font-medium"><Link to="/contact" className="hover:text-blue-900">Contact</Link></li>
            </ul>
        </nav>
    );
}