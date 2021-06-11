import { useState, useEffect } from 'react'


const utils = 
[
    { icon: "bi bi-check-circle-fill", fontColor: 'text-succes' },
    { icon: "bi mx-3 bi-exclamation-circle-fill", fontColor: 'text-warning'},
    { icon: "bi mx-3 bi-dash-circle-fill", fontColor: 'text-danger'},
]

export default function DialogToast({ msg, hideDialogToast }) {
    const [fontColor, setFontColor] = useState('text-success')
    const [icon, setIcon] = useState(<i className="bi bi-check-circle-fill" style={{fontSize: 30}}></i>)    

    function hideDialogToastLoc() { hideDialogToast() }

    return (
        <div className="position-fixed top-50 start-50 translate-middle">
            <div id="dialog" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body">
                    {msg}
                    <div class="mt-2 pt-2 border-top">
                        <button type="button" class="btn btn-primary btn-sm" onClick={hideDialogToastLoc} >ok</button>
                        <button type="button" class="btn btn-secondary btn-sm" onClick={hideDialogToastLoc} >cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )

}



// useEffect(function()
//     {
//         switch(error.level)
//         {
//             case 0: setFontColor('text-success'); setIcon(<i className="bi mx-3 bi-check-circle-fill" style={{fontSize: 30}}></i>);
//             break;
//             case 1: setFontColor('text-warning'); setIcon(<i className="bi mx-3 bi-exclamation-circle-fill" style={{fontSize: 30}}></i>);
//             break;
//             case 2: setFontColor('text-danger'); setIcon(<i className="bi mx-3 bi-dash-circle-fill" style={{fontSize: 30}}></i>);
//             break;
//         }
//     },[error.level])