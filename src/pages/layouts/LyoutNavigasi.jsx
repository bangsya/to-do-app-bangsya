import { Outlet } from "react-router";
import HumburgerMenu from "../komponents/HumburgerMenu";
import { useRef, useState } from "react";
import Menu from "../komponents/Menu";

export default function LayoutNavigasi() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    return (
        <>
            <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
                <h1 className="text-lg font-bold">TO-DO LIST</h1>
                <HumburgerMenu isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} buttonRef={buttonRef} />
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} buttonRef={buttonRef} />
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}