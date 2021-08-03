import './Navbar.css'
import React, {useState, useEffect } from 'react'



function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);

            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img 
         className="nav__logo"
         src="data:image/png;base64,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"
         alt="Netflix logo"
         />
         <img 
         className="nav__avtar"
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
         alt="Netflix logo"
         />
        
            
        </div>
    )
}

export default Navbar
