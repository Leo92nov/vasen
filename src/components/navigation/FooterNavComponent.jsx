import { Link } from "react-router-dom"

export default function FooterNavComponent({ to, children }) {

    return <>

        <button className="text-xl font-serif text-white hover:scale-110"><Link to={to}>{children}</Link></button>

    </>
}