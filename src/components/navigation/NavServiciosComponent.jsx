import { Link } from "react-router-dom"
import { useState } from "react"
import { CorporalComponent } from "./CorporalCommponent"
export default function NavServiciosComponent({ to, children }) {

    const [open, setOpen] = useState(false)

    return <>
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative inline-block"
        >
            <button className="h-20 relative before:absolute before:h-[2px]
                    before:w-0 before:bg-[#B8963E] hover:before:w-full
                    before:transition-all before:duration-300 text-2xl
                    font-serif font-light bg-gradient-to-r from-[#B8963E]
                    via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent
                    transition-transform duration-300 hover:scale-105 italic"
            >
                <Link to={to}>{children}</Link>
            </button>

            <div
                className={`mt-[-0.5rem] ml-[-8px]
                absolute w-60
                transform origin-top
                transition-all duration-300
                ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
                `}
            >
                <ul className="bg-[#1c1c1b] rounded-md overflow-hidden">
                    {CorporalComponent.map((item, index) => (
                        <li
                            key={index}
                            className="h-8 flex items-center pl-2
                            text-[#D8D3C4] text-lg
                            hover:bg-[#8C6A2F] italic
                            transition-colors duration-500"
                        >
                            <Link to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>}