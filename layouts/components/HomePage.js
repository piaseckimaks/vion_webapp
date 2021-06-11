import React, { useEffect } from 'react'
import FavAppsListItem from './FavAppsListItem'
import ToDoListItem from './ToDoListItem'
import { useUser, fetchJson } from '../../util'


export default function HomePage({  }) {
    const { user, mutateUser } = useUser({redirectTo: true, redirectIfFound: false})

    useEffect(async ()=> 
    {
        await mutateUser(
            fetchJson(
                '/api/apps/get_fav_apps', { headers: {'Content-Type': 'application/json'}, }))
    }, [user])

    async function deleteFavApp(e, id)
    {
        if(!id) return

        await mutateUser(
            fetchJson(
                '/api/apps/del_fav_app',
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({id: id}),
                })
        )

        mutateUser(
            fetchJson(
                '/api/apps/get_fav_apps', { headers: {'Content-Type': 'application/json'}, }))
    }

    return (
        <div className="d-flex flex-wrap container-fluid h-100 pt-145 pb-45">
        <div className="container-fluid h-100">
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 text-white h-100">
                <div className="col vh-80">
                    <div className="bg-black vh-80 p-2">
                        <h4 >Favorites:</h4>
                        <ul className="list-group list-group-flush ">
                        { user?.favApps ? user.favApps.map((el, i) => <FavAppsListItem name={el.name} key={i} handleClick={(ev)=> deleteFavApp(ev, el.id)} />) : '' }
                        </ul>
                    </div>
                </div>
                <div className="col vh-80">
                    <div className="bg-black vh-80 p-2">
                        <h4>Intermadiares To Do List:</h4>
                        <ul className="list-group list-group-flush ">   
                            <ToDoListItem name={'name'} />
                        </ul>
                    </div>
                </div>
                <div className="col vh-80">
                    <div className="h-100">
                        <div className="row h-100">
                            <div className="col-lg h-49">
                                <div className="bg-black h-100 p-2">
                                    <h4>Your To Do List:</h4>
                                    <ul className="list-group list-group-flush ">
                                        <ToDoListItem name={'name'} />
                                    </ul>
                                </div>
                            </div>
                            <div className="h-2"></div>
                            <div className="col-lg h-49">
                                <div className="bg-black h-100 p-2">
                                    <h4>Something:</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

