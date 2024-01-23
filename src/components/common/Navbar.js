import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Explore Victoria</Link>
        <ul>
            <CustomLink to="/profile">Profile</CustomLink>
            <CustomLink to="/explore">Explore</CustomLink>
            <CustomLink to="/victoria-resources">Victoria Resources</CustomLink>
            <CustomLink to="/saved-events">Saved Events</CustomLink>
            <CustomLink to="/request">Request</CustomLink>            
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}