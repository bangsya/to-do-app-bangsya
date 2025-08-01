import { Outlet } from "react-router";
import HumburgerMenu from "../komponents/HumburgerMenu";
import { useRef, useState } from "react";
import Menu from "../komponents/Menu";

export default function LayoutNavigasi() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    return (
        <>
            <div className="bg-blue-950 text-white p-4 flex justify-between items-center w-full relative">
                <h1 className="text-lg font-bold md:text-xl">TO-DO LIST</h1>
                <div className="flex items-center px-4">
                    <HumburgerMenu isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} buttonRef={buttonRef} />
                    <Menu isOpen={isOpen} setIsOpen={setIsOpen} buttonRef={buttonRef} />
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}