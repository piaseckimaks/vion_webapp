import Layout from '../layouts/_Layout'
import { useUser, fetchJson } from '../util/'
import { Spinner } from 'react-bootstrap/'
import { HomePage,  } from '../layouts/components/'
import { useEffect } from 'react'

export default function home({ showInfoToast, showDialogToast, dialogRes }) {
    const { user, mutateUser } = useUser({redirectTo: true, redirectIfFound: false})
    
    useEffect(async ()=> 
    {
        await mutateUser(
            fetchJson(
                '/api/apps/get_fav_apps', { headers: {'Content-Type': 'application/json'}, }))
    }, [user])

    async function deleteFavApp(name, id)
    {
        if(!id) return

        showDialogToast(`Do you want to remove ${name} app from favorites?`)
        document.getElementById('confirm').addEventListener('click',
        async function()
        {
            await mutateUser( fetchJson( '/api/apps/del_fav_app',
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({id: id}),
                    })
            )

            mutateUser( fetchJson( '/api/apps/get_fav_apps', { headers: {'Content-Type': 'application/json'}, }))
        })
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
        <Layout active="home">
            <HomePage deleteFavApp={deleteFavApp} user={user}/>
        </Layout>
    )
}


