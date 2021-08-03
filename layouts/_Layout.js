import NavBar from "./components/NavBar"
export default function Layout({children, active}) {

    return (
        <div className="vh-100 bg-dark overflow-hidden">
            <NavBar active={active}/>
            <div className="h-100">{children}</div>
        </div>
    )
}


