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

        className="h-20 relative before:absolute before:h-[2px]
          before:w-0 before:bg-[#B8963E] hover:before:w-full
          before:transition-all before:duration-300 text-2xl
          font-serif font-light bg-gradient-to-r from-[#B8963E]
          via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent
          transition-transform duration-300 hover:scale-105 italic">

        <Link to={to} state={state}>{children}</Link>

      </button>

      <div className={`absolute z-50
right-0 2xl:left-0
right-full
transform
origin-top-right 2xl:origin-top 2xl:mt-[-18px] 2xl:ml-[-8px]
transition-all duration-300
mt-[-5rem]
${open
          ? "scale-x-100 scale-y-100 w-70 2xl:scale-x-100 2xl:scale-y-100 opacity-100"
          : "scale-x-0 scale-y-0 2xl:scale-x-100 2xl:scale-y-0 opacity-0"
        }`}
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