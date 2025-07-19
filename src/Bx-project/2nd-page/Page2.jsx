import React from "react";
import './Page2.css'
import { useNavigate } from "react-router-dom";

const Page2 =()=>{

  const navigate = useNavigate()
    function goToLibrary (){
    navigate("/library")
    
  }

    return (
        <div className="container-page2">
            <div className="first-track">
                <h2>What is GPT-3</h2>
                <div>
                <p className="pghs">We so opinion friends me massage as delight. Whole front do of plate heard oh ought. His</p>
                <p className="pghs">His defective nor convinced residence own. Connection has put impossible own apartments </p>
                <p className="pghs">boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                </div>
            </div>
            <div className="second-track">
                <div>
                <h1>The possibilities are beyond </h1>
                <h1>your imagination</h1>
                </div>
                {/* <p className="pack">Explore the library</p> */}
                <button onClick={goToLibrary} className="pack">Explore the library</button>
            </div>
            <div className="third-track">
                <div className="chatbots">
                    <h2>Chatbots</h2>
                    <p className="pghs">We so opinion friends me message as   </p>
                    <p className="pghs">delight. Whole front do of plate heard oh</p>
                    <p className="pghs">ought.</p>
                </div>
                <div className="Knowledgbase">
                    <h2>Knowledgbase</h2>
                    <p className="pghs">At jointure ladyship an insisted so humanity </p>
                    <p className="pghs">he. Friendly bachelor entrance to on by. As</p>
                    <p className="pghs"> put impossible own apartments b</p>
                </div>
                <div className="Education">
                    <h2>Education</h2>
                    <p className="pghs">At jointure ladyship an insisted so humanity</p>
                    <p className="pghs">he. Friendly bachelor entrance to on by. As</p>
                    <p className="pghs"> put impossible own apartments b</p>
                </div>
            </div>
            
        </div>

    )
}

export default Page2 ;