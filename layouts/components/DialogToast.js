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
        <div className="position-fixed text-white top-50 start-50 translate-middle ">
            <div id="dialog" class="toast bg-dark" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body bg-dark">
                    {msg}
                    <div class="mt-2 pt-2 d-flex justify-content-between border-top">
                        <button id="confirm" type="button" class="btn btn-success btn-sm" onClick={hideDialogToastLoc} >ok</button>
                        <button id="reject" type="button" class="btn btn-danger btn-sm" onClick={hideDialogToastLoc} >cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )

}