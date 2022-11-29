import React, { useState } from 'react'

export default function Comp1() {
    const [state, setState]= useState("pink") 

    const bgcolor = () => {
        // document.getElementById("main").style.backgroundColor="green"
        // document.getElementById("btn").innerText="hello :)"
        setState("yellow")
           }
    return (
        <>
            <div id="main" style={{backgroundColor:state}}>
                <button id="btn" onClick={bgcolor}>Click me</button>
            </div>
        </>
    )
}
