import {useState, useEffect} from 'react'
import Layout from '../layouts/_Layout'
import { fetchJson, useUser } from '../util/'
import { AppsList, M22Cards, AlertFinder } from '../layouts/components'
import { Spinner } from 'react-bootstrap/'



export default function apps({ showInfoToast, showDialogToast }) {
    const { user, mutateUser } = useUser({redirectTo: true, redirectIfFound: false})
    const [apps, setApps] = useState([])
    const [openApp, setOpenApp] = useState('intro')

    useEffect(()=> { fetch('/api/apps/get_apps').then(res=>res.json()).then(res=> res.status ? setApps(res.data) : window.location.href = '/500')}, []);

    function handleOpenApp(e) {

        switch (e.currentTarget.id) {
            case 'M2200 restart': setOpenApp('M2200 restart');
                break;
            case 'Alert finder': setOpenApp('Alert finder');
                break;
            default: setOpenApp('intro');
        }
    }

    async function handleAddFav(e)
    {
        const appName = e.currentTarget.id
        const tempArr = user?.favApps.filter(e=> e.name === appName)

        if(tempArr.length > 0) { showInfoToast({level: 1, message: 'App already in favorites!'}); return }

        await mutateUser( fetchJson( '/api/apps/add_fav_app',
                {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({appName: appName})
                }
            )
        )
        
        await mutateUser( fetchJson( '/api/apps/get_fav_apps', { headers: {'Content-Type': 'application/json'}, }))

        showInfoToast({level: 0, message: 'App succesfully added to favorites!'})
    }

    if(!user?.isLoggedIn) 
    {
        return (
            <div className="bg-black vh-100 vw-100">
                <div className="position-absolute top-50 start-50 translate-middle" >
                    <Spinner animation="border" role="status" />
                </div>
            </div>
        )
    }

    return (
        <Layout>
        <div className="h-100 d-flex">
            <AppsList apps={apps} handleAddFav={handleAddFav} handleOpenApp={handleOpenApp} user={user}/>
            <div id="app" className="w-75 h-100 mx-auto text-primary p-2 d-flex flex-wrap justfy overflow-auto">
                {openApp === 'M2200 restart' ? <M22Cards showDialogToast={showDialogToast}/> : ''}
                {openApp === 'Alert finder' ? <AlertFinder /> : ''}
            </div>
            
        </div>
        </Layout>
    )
}