import React from 'react'
import { Spinner } from 'react-bootstrap/'

export default function M22Cards({ cards }) {
    return (
        <div className="mx-auto text-primary d-flex flex-wrap justfy overflow-auto">
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
    )
}
