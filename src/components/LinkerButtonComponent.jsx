import { Link } from "react-router-dom"

export default function LinkerButtonComponent({ to, children }) {

    return <>

        <div className="text-sm sm:text-xl font-serif text-white transition-transform duration-300 hover:scale-110"><Link to={to}>{children}</Link></div>

    </>
}