import React, { useState } from 'react'
import FavAppsListItem from './FavAppsListItem'
import ToDoListItem from './ToDoListItem'


export default function HomePage({ deleteFavApp, user }) {
    const [globalTasks, setGlobalTasks] = useState([]) 
    const [personalTasks, setPersonalTasks] = useState([])

    return (
        <div className="d-flex flex-wrap container-fluid h-100 mt-4 pb-45">
        <div className="container-fluid h-100">
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 text-white h-100">
                <div className="col vh-80">
                    <div className="bg-black vh-80 p-2">
                        <h4 >Favorites apps:</h4>
                        <ul className="list-group list-group-flush ">
                        { user?.favApps ? user.favApps.map((el, i) => <FavAppsListItem name={el.name} key={i} handleClick={()=> deleteFavApp( el.name, el.id )} />) : '' }
                        </ul>
                    </div>
                </div>
                <div className="col vh-80">
                    <div className="bg-black vh-80 p-2">
                        <h4>Intermadiares To Do List:</h4>
                        <ul className="list-group list-group-flush ">   
                            <ToDoListItem tasks={globalTasks} />
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
                                        <ToDoListItem tasks={personalTasks} />
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

