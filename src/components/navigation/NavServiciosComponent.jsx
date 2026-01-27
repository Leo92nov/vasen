import { Link } from "react-router-dom"
import { useState } from "react"
export default function NavServiciosComponent ({to, children}){

    const [open, setOpen] = useState(false) 

    return<>
    <div onMouseEnter = {() => setOpen(true)}
        onMouseLeave={()=> setOpen(false)}
        className="realtive inline-block">
        
        
        
    <button className="h-20 relative before:absolute before:h-[2px]
                    before:w-0 before:bg-[#B8963E] hover:before:w-full
                    before:transition-all before:duration-350 text-2xl 
                    font-serif font-light bg-gradient-to-r from-[#B8963E]
                    via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent
                    transition-transform
                    duration-400 ease-in-out hover:scale-105 italic">
                        <Link to={to}>{children}</Link></button>
    {open && (
        <div className="absolute bg-red-100 w-60">
            <ul>
                <li>Facial</li>
                <li>Depilaciones</li>
                <li>Corporal</li>
                <li>Sueros</li>
            </ul>
        </div>
    )}
    </div>

    </>
}