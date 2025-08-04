import { useState } from "react";

export default function Checkbox(){
    const [checked, setChecked] = useState(false);
    return (
        <label className="relative inline-block h-8 w-8">
            <input type="checkbox" className="appearance-none h-8 w-8 rounded-full border border-blue-950/20 bg-blue-500/20 checked:bg-blue-500 checked:border-blue-500 transition-colors cursor-pointer hover:scale-105"
                onChange={() => setChecked(!checked)}/>
            {checked && (
                <svg
                    className="absolute left-1 top-1 w-6 h-6 text-white pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            )}
        </label>
    );
}