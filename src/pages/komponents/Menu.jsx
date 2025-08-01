import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router";
import ItemNav from "./ItemNav";

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
        <nav ref={navRef} className={`absolute top-16 right-10 max-w-[250px] w-full bg-blue-500 rounded-xl shadow-xl border border-slate-200 origin-top-right md:scale-100 md:static md:max-w-full md:border-none md:shadow-none transform transition-all duration-500 ${isOpen ? "scale-100" : "scale-0"}`}>
            <ul className="md:flex text-center md:gap-5">
                <ItemNav name="Home" to="/" />
                <ItemNav name="Complete" to="/complete" />
                <ItemNav name="Pending" to="/pending" />
                <ItemNav name="Add" to="/add" />
                <ItemNav name="About" to="/about" />
            </ul>
        </nav>
    );
}