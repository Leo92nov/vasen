import { Link } from "react-router-dom"
import { useState } from "react"
import { getServices } from "../../asyncmock"


export default function NavServAparatologiaComponent({ to, children, state }) {

  const services = getServices("aparatologia")


  const [open, setOpen] = useState(false)

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative inline-block"
    >

      <button

        className="2xl:h-20 pt-4 relative before:absolute before:h-[2px]
          before:w-0 before:bg-[#B8963E] hover:before:w-full
          before:transition-all before:duration-300 text-2xl
          font-serif font-light bg-gradient-to-r from-[#B8963E]
          via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent
          transition-transform duration-300 hover:scale-105 italic">

        <Link to={to} state={state}>{children}</Link>

      </button>

      <div className={`
   absolute z-50
    right-full top-0
    w-60 top-4 pr-2

    2xl:right-auto
    2xl:left-0
    2xl:top-full
    2xl:mt-[-20px]
    2xl:ml-[-12px]
    2xl:-translate-y-0

    transform transition-all duration-300 ease-out
    origin-right 2xl:origin-top

    ${open
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95 pointer-events-none"}
  `}
      >
        <ul className="bg-[#1c1c1b] rounded-md overflow-hidden">

          {services.map((serv) => (
            <li
              className=" text-lg
                h-8 flex items-center pl-2
                text-[#D8D3C4] italic
                hover:bg-[#8C6A2F]
                transition-colors duration-500
              "
            >
              <Link to={`/Aparatologia/${serv.id}`}>{serv.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}