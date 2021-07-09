import React from 'react'

export default function ResizeableDiv({children}) {
    
    const isResizing = false;

    function onmousedown(e) {
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
        const el = document.querySelector(".item");
        el.style.cursor = 'grabbing'
        // el.style.position = 'absolute'

        let prevX = e.clientX;
        let prevY = e.clientY;
      
        function mousemove(e) {
          if (!isResizing) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;
      
            const rect = el.getBoundingClientRect();
      
            el.style.left = rect.left - newX + "px";
            el.style.top = rect.top - newY + "px";
      
            prevX = e.clientX;
            prevY = e.clientY;
          }
        }
      
        function mouseup() {
            el.style.cursor = 'grab'
            // el.style.position = 'relative'
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
        }
    }

    function onmousemove() {

    }
    
    function onmouseup() {

    }

    return (
        <div className="h-25 w-50 item bg-dark p-2" onMouseDown={onmousedown} >
            <div className="resize ne"></div>
            <div className="resize nw"></div>
            <div className="resize se"></div>
            <div className="resize sw"></div>
            <div className="h-100 w-100 user-select-none">{children}</div>
        </div>
    )
}
