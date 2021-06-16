import React from 'react'

export default function AppsList({apps, handleAddFav, handleOpenApp, user}) {

    return (
        <ul className="py-3 min-w-25 list-group border-end border-secondary list-group-flush list h-100">
            {apps.map((e, i) => (
                <li key={e.id} className=" list-group-item bg-black border-secondary text-white">
                    <div className="d-flex justify-content-between" >
                        <span title="Application for restarting M2200" className="user-select-none">{e.name}</span>
                        <div >
                            <a title="Add to favorites" id={e.name} onClick={handleAddFav} className="mx-1">
                                <i className="hart bi bi-suit-heart-fill" ></i>
                            </a>
                            <a title="Open app" id={e.name} onClick={handleOpenApp} className="mx-1"><i className="bi bi-arrow-right-square add"></i></a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
