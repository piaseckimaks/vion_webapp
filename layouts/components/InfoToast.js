import { useState, useEffect } from 'react'


const utils = 
[
    { icon: "bi bi-check-circle-fill", fontColor: 'text-success', border: 'success' },
    { icon: "bi mx-3 bi-exclamation-circle-fill", fontColor: 'text-warning', border: 'warning'},
    { icon: "bi mx-3 bi-dash-circle-fill", fontColor: 'text-danger', border: 'danger' },
]

export default function InfoToast({ data }) {
    const [fontColor, setFontColor] = useState('text-success')
    const [icon, setIcon] = useState(<i className="bi bi-check-circle-fill" style={{fontSize: 30}}></i>)    

    useEffect(()=> console.log(data))

    return (
        <div className="position-fixed bottom-0 end-0 m-3">
            <div id="info" className={`toast bg-black border border-${utils[data?.level]?.border}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className={`toast-header bg-black ${ utils[data?.level]?.fontColor }`}>
                <i className={ utils[data?.level]?.icon } style={{fontSize: 30}}></i>
                <strong className="ms-2">{data?.message}</strong>
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