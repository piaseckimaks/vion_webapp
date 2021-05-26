import {useState, useEffect} from 'react'
import layout from '../layouts/_Layout'
import fetchJson from '../util/fetchJson'
import withSession from '../util/session'
import useUser from '../util/useUser'
import Router from 'next/router'

export default function apps({ user }) {
    // const { user, mutateUser } = useUser()
    const [cards, setCards] = useState([])
    const [apps, setApps] = useState([])

    useEffect(()=> { fetch('/api/apps/get_apps').then(res=>res.json()).then(res=> res.status ? setApps(res.data) : window.location.href = '/500')}, []);

    function handleOpenApp(e) {
        console.log('event')
        switch (e.currentTarget.id) {
            case 'M2200 restart': fetch('/api/apps/m22app').then(res => res.json()).then(res => res.status ? setCards(res.data) : window.location.href = '/500');
                break;
        }
    }

    async function handleAddFav(e)
    {
        const appName = e.currentTarget.id

        if( user.apps.findIndex(el=> el.name === appName) > -1 ) return 
        
        const body = { appName: appName, userId: user.id }

        const res = await fetchJson(
                '/api/apps/add_fav_app',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
              })
        
        if(!res.added) { console.log('error adding app'); return } 

        Router.push('/apps')
    }

    return (
        <div className="pt-120 h-100 d-flex">
            <ul className="py-3 min-w-25 list-group border-end border-secondary list-group-flush list h-100">
                {apps.map((e, i) => (

                    <li key={e.id} className=" list-group-item bg-black border-secondary text-white">
                        <div className="d-flex justify-content-between" href="">
                            <span title="Application for restarting M2200" className="user-select-none">{e.name}</span>
                            <div >
                                <a title="Add to favorites" id={e.name} onClick={handleAddFav} className="mx-1"><i className="hart bi bi-suit-heart-fill"></i></a>
                                <a title="Open app" id={e.name} onClick={handleOpenApp} className="mx-1"><i className="bi bi-arrow-right-square add"></i></a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div id="app" className="w-75 mx-auto text-primary p-2 d-flex flex-wrap justfy overflow-auto">
                {cards.map((e, i) => {
                    return (<div id={e.ip} key={e.id} className="card p-2 m-2 bg-black text-white" style={{ height: 150, width: 300 }}>
                        <p className="m-1 text-center fs-4">{e.name.toUpperCase()}</p>
                        <span className="m-1">
                            <span className="mx-3">Status:</span>
                            <svg style={{ width: 24, height: 24, opacity: '0.5' }} viewBox="0 0 24 24">
                                <path fill="rgb(255,0,0)"
                                    d=" M12,2
                                                A10,10 0 0,1 22,12 
                                                A10,10 0 0,1 12,22
                                                A10,10 0 0,1 2,12
                                                A10,10 0 0,1 12,2
                                                Z" />
                            </svg>
                        </span>
                        <button id="restart-btn" className="btn btn-dark text-white">{'restart'.toUpperCase()}</button>
                    </div>)
                })}
            </div>
        </div>
    )
}

apps.layout = layout;

export const getServerSideProps = withSession( async function ({ req, res })
{
    const user = req.session.get('user')
    const apps = await fetchJson('http://localhost:3000/api/apps/get_fav_apps', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: user.id })})

    // for(let k in apps) for(let ki in apps[k]) console.log('ssr' + apps[k][ki].id)
    // console.log(apps.favApps)

    if(!user || !apps)
    { return {  redirect: { destination: '/', permanent: false, }, } }

    return { props: { user: { apps: apps.favApps, ...user } } }
})