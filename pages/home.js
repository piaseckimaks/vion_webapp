import React from 'react'
import layout from '../layouts/_Layout'

export default function home() {
    const [favApps, setFavApps] = React.useState([]);

    return (
        <div className="d-flex flex-wrap container-fluid h-100 pt-145 pb-45">
            <div className="container-fluid h-100">
                <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 text-secondary h-100">
                    <div className="col vh-80">
                        <div className="bg-black vh-80 p-2">
                           <h4>Favorites:</h4>
                           <ul className="list-group list-group-flush ">
                                <li className="list-group-item bg-dark text-secondary d-flex justify-content-between">
                                <a href=""><span>An item</span></a>
                                    <div >
                                        <a className="mx-1" href="">
                                        <i className="bi bi-suit-heart-fill" style={{color: 'green'}}></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>                           
                    </div>
                    <div className="col vh-80">
                        <div className="bg-black vh-80 p-2">
                            <h4>Intermadiares To Do List:</h4>
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item bg-dark text-secondary d-flex justify-content-between">
                                    <span>An item</span>
                                    <div >
                                        <a className="mx-1" href="">
                                            <i className="bi bi-pencil"></i>
                                        </a>
                                        <a className="mx-1" href="">
                                            <i className="bi bi-check-square"></i>
                                        </a>
                                    </div>
                                </li>
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
                                            <li className="list-group-item bg-dark text-secondary d-flex justify-content-between">
                                                <span>An item</span>
                                                <div >
                                                    <a className="mx-1" href="">
                                                        <i className="bi bi-pencil"></i>
                                                    </a>
                                                    <a className="mx-1" href="">
                                                        <i className="bi bi-check-square"></i>
                                                    </a>
                                                </div>
                                            </li>
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