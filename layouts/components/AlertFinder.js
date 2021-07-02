import React from 'react'

export default function AlertFinder() {
    return (
        <div className="text-white text-center w-100 ">
            <p className="m-0 p-0 fs-2">Search for alert information</p>
            <p className="m-0 p-0">( Type in alert code eg. 303 or description eg. Invoersnijkamer Wacht op RESP van WMS/Innova )</p> 
            <div className="d-flex justify-content-center ">
                <input className="mx-1 w-25" placeholder="Enter code or description..."></input>
                <button className="btn btn-secondary btn-sm">Search</button>
            </div>
        </div>
    )
}
