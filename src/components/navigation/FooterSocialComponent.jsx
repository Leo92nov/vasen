import { Link } from "react-router-dom"

export default function FooterSocialComponent({ to, children }) {

    return <>

        <button className="hover:scale-110"><Link to={to}>{children}</Link></button>

    </>
}