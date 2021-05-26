import { useState, useEffect } from 'react'

export default function Toast({error}) {
    const [fontColor, setFontColor] = useState('text-success')
    const [icon, setIcon] = useState(<i className="bi bi-check-circle-fill" style={{fontSize: 30}}></i>)

    useEffect(function()
    {
        switch(error.level)
        {
            case 0: setFontColor('text-success'); setIcon(<i className="bi mx-3 bi-check-circle-fill" style={{fontSize: 30}}></i>);
            break;
            case 1: setFontColor('text-warning'); setIcon(<i className="bi mx-3 bi-exclamation-circle-fill" style={{fontSize: 30}}></i>);
            break;
            case 2: setFontColor('text-danger'); setIcon(<i className="bi mx-3 bi-dash-circle-fill" style={{fontSize: 30}}></i>);
            break;
        }
    },[error.level])

    return (
        <div className="position-fixed bottom-0 end-0 m-3">
            <div id="liveToast" className="toast bg-dark" role="alert" aria-live="assertive" aria-atomic="true">
            <div className={`toast-header bg-dark ${fontColor}`}>
                {icon}
                <strong >{error.message}</strong>
            </div>
            </div>
        </div>
    )
}
