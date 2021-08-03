import { useState, useEffect } from 'react'


const utils = 
[
    { icon: "bi bi-check-circle-fill", fontColor: 'text-succes' },
    { icon: "bi mx-3 bi-exclamation-circle-fill", fontColor: 'text-warning'},
    { icon: "bi mx-3 bi-dash-circle-fill", fontColor: 'text-danger'},
]

export default function DialogToast({ msg, hideDialogToast }) {
    function hideDialogToastLoc(e) { hideDialogToast(e) }

    return (
        <div id="dialog-box" className="position-fixed text-white top-50 start-50 translate-middle d-none">
            <div id="dialog" className="toast bg-dark border border-white" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body bg-dark">
                    {msg}
                    <div className="mt-2 pt-2 d-flex justify-content-between border-top">
                        <button id="confirm" type="button" className="btn btn-success btn-sm" onClick={hideDialogToastLoc} >ok</button>
                        <button id="reject" type="button" className="btn btn-danger btn-sm" onClick={hideDialogToastLoc} >cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )

}