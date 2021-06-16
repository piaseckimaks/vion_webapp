import React from 'react'
import styles from '../styles/layout.module.css'
import useUser from '../util/useUser'
import fetchJson from '../util/fetchJson'
import { useRouter } from 'next/router'

export default function Layout({children, active}) {

    return (
        <div className="vh-100 bg-dark overflow-hidden">
            <Navbar active={active}/>
            <div className="h-100">{children}</div>
        </div>
    )
}

function Navbar({active}) {
    const { user, mutateUser } = useUser()
    const router = useRouter()

    async function signout(e)
    {
        e.preventDefault()
        mutateUser(
        await fetchJson('/api/auth/signout', { method: 'POST' }),
        false
        )
        router.push('/')
    }

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
                            <a onClick={handleActive} href="/dashboard" className={active === 'dashboard' ? 'nav-link active' : 'nav-link'} >Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleActive} href="/alerts" className={active === 'alerts' ? 'nav-link active' : 'nav-link'}>Alerts</a>
                        </li>
                    </ul>
                    
                    <div className="navbar-nav dropdown me-5 px-5">
                        <a className="nav-link" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <h1><i className="bi bi-person-circle"></i> </h1>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                            <li className="dropdown-item-text text-center fs-5 text-capitalize user-select-none"> {user?.name} </li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="/profile">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="/api/auth/signout" onClick={signout}>Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

