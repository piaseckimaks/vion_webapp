import React from 'react'
import styles from '../styles/layout.module.css'

export default function Layout({children}) {
    const name = children[1].type.name;

    return (
        <div>
            <Navbar name={name}/>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

function Navbar(props) {
    const [active, setActive] = React.useState(props.name ? props.name : 'home');

    function handleActive(){ return }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <img className="navbar-brand" src="vion_logo.png"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a onClick={handleActive} href="/home" className={active === 'home' ? 'nav-link active' : 'nav-link'}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleActive} href="/apps" className={active === 'apps' ? 'nav-link active' : 'nav-link'}>Apps</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleActive} href="/dashboard"  className={active === 'dashboard' ? 'nav-link active' : 'nav-link'} >Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleActive} href="/alerts" className={active === 'alerts' ? 'nav-link active' : 'nav-link'}>Alerts</a>
                        </li>
                    </ul>
                    <div>
                        <form className="d-flex">
                            <input id="a" className="text-light form-control me-2 bg-dark border border-dark" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-dark text-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}