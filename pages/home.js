import {useState, useEffect} from 'react'
import layout from '../layouts/_Layout'
import withSession from '../util/session'
import fetchJson from '../util/fetchJson'
import Router from 'next/router'


export default function home() {

    async function deleteFavApp(e, id)
    {

        if(!id) return

        const res = await 
            fetchJson(
              '/api/apps/del_fav_app',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: id}),
              })
        
        if(res.deleted) Router.push('/home')
    }

    // if(!user.apps) return <p className="position-absolute top-50 start-50 translate-middle" >Loading ...</p>

    return (
        <div className="d-flex flex-wrap container-fluid h-100 pt-145 pb-45">
            <div className="container-fluid h-100">
                <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 text-white h-100">
                    <div className="col vh-80">
                        <div className="bg-black vh-80 p-2">
                            <h4 >Favorites:</h4>
                            <ul className="list-group list-group-flush ">
                                {/* { user.apps.map((e, i) => <AppsListItem name={e.name} key={i} id={e.id} handleClick={deleteFavApp} />) } */}
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

home.layout = layout;


function AppsListItem({name, id, handleClick})
{
    function click(e) { handleClick(e, id) }

    return (
    <li className="list-group-item bg-dark text-white d-flex justify-content-between">
        <a href=""><span>{name}</span></a>
        <div >
            <a className="mx-1" onClick={click}>
                <i title="Delete app from favorite" className="bi bi-dash-circle del-btn"></i>
            </a>
        </div>
    </li>)
}

function ToDoListItem({name})
{
    return(
        <li className="list-group-item bg-dark text-white d-flex justify-content-between">
            <span>{name}</span>
            <div >
                <a className="mx-1" href="">
                    <i className="bi bi-pencil"></i>
                </a>
                <a className="mx-1" href="">
                    <i className="bi bi-check-square"></i>
                </a>
            </div>
        </li>
    )
}