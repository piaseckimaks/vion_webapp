export default function AppsListItem({name, id, handleClick})
{
    function click(e) { handleClick(e, id) }

    return (
    <li className="list-group-item bg-dark text-white d-flex justify-content-between">
        <a href=""><span>{name}</span></a>
        <div >
            <a className="mx-1" onClick={click}>
                <i title="Delete app from favorite" className="bi bi-dash-circle del-btn"></i>
            </a>
        </div>
    </li>)
}