import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap/'

export default function M22Cards({ showDialogToast }) {
    const [ cards, setCards ] = useState([]);
    useEffect(()=> fetch('/api/apps/m22app').then(res => res.json()).then(res => res.status ? setCards(res.data) : window.location.href = '/500'), [])
    
    function handleRestart(ip, name)
    { 
        console.log('restart');

        showDialogToast(`Are you sure you want restart indicator ${name} ?`)
        document.getElementById('confirm').addEventListener('click', () => fetch(`http://10.52.131.70:3000/restart?ip=${e.ip}`, {method: 'POST'}) )
    }

    return (
        <div className="mx-auto h-85 text-primary d-flex flex-wrap justfy overflow-auto">
            {cards?.map((e, i) => {
                return (<div id={e.ip} key={e.id} className="card p-2 m-1 bg-black text-white" style={{ height: 150, width: 300 }}>
                    <p className="text-center fs-4">{e.name.toUpperCase()}</p>
                    <div className="d-flex justify-content-between">
                    <span className="text-center">{e.ip}</span>
                    <div>
                    <span className="mx-1">Status:</span>
                    <svg style={{ width: 16, height: 16, opacity: '0.5' }} viewBox="0 0 24 24">
                        <path fill="rgb(0,255,0)"
                            d=" M12,2
                                        A10,10 0 0,1 22,12 
                                        A10,10 0 0,1 12,22
                                        A10,10 0 0,1 2,12
                                        A10,10 0 0,1 12,2
                                        Z" />
                    </svg>
                    </div>
                    </div>
                    <button id="restart-btn" onClick={() => handleRestart(e.ip, e.name)} className="btn btn-dark text-white">RESTART</button>
                </div>)
            })}
        </div>
    )
}
