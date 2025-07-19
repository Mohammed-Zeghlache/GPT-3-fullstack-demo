import React from "react";
import './Page6.css'
import imgone from '../../assets/Images/imgone.png';
import imgtwo from '../../assets/Images/imgtwo.png';
import imgthree from '../../assets/Images/imgthree.png';
import imgfour from '../../assets/Images/imgfour.png';
import imgfive from '../../assets/Images/imgfive.png';


const Page6 =()=>{

    return (
        <div className="container-page6">
            <div className="h1-page6">
                  <div className="container-img1">
                    <img src={imgone} alt="" />
                    <p className="pjpj">Sept 26, 2021</p>
                    <div className="h2-img1">
                        <h2>GPT-3 and Open  AI is the</h2>
                        <h2>future. Let us exlore how it</h2>
                        <h2>is?</h2>
                 </div>
                    <p>Read Full Article</p>
                </div>
                <div className="container-img2">
                    <img src={imgtwo} alt="" />
                    <p>Sep 26, 2021</p>
                    <div className="h2-img2">
                        <h2>GPT-3 and Open  AI is the</h2>
                        <h2>future. Let us exlore how it is?</h2>
                    </div>
                    <p>Read Full Article</p>
                </div>
                  <div className="container-img3">
                    <img src={imgthree} alt="" />
                    <p>Sep 26, 2021</p>
                    <div className="h2-img3">
                        <h2>GPT-3 and Open  AI is the</h2>
                        <h2>future. Let us exlore how it is?</h2>
                    </div>
                    <p>Read Full Article</p>
                </div>
                  <div className="container-img4">
                    <img src={imgfour} alt="" />
                    <p>Sep 26, 2021</p>
                    <div className="h2-img4">
                        <h2>GPT-3 and Open  AI is the</h2>
                        <h2>future. Let us exlore how it is?</h2>
                    </div>
                    <p>Read Full Article</p>
                </div>
                  <div className="container-img5">
                    <img src={imgfive} alt="f" />
                    <p>Sep 26, 2021</p>
                    <div className="h2-img5">
                        <h2>GPT-3 and Open  AI is the</h2>
                        <h2>future. Let us exlore how it is?</h2>
                    </div>
                    <p>Read Full Article</p>
                </div>
            </div>

         

        </div>
    )
}
export default Page6 ;