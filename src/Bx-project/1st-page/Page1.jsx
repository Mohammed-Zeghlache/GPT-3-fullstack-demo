import React, { useRef, useState } from "react"; 
import './Page1.css';
import Ai from '../../assets/Images/Ai.png';

const Page1 = () => {



  const addEmail = useRef();
  const [Details, setDetails] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const Email = addEmail.current.value;

    if (Email === "") {
      alert("Enter your Email Address");
      return;
    }

    console.log("Email:", Email);
    alert("📨 Your email has been successfully sent!");
    setDetails(true);
    addEmail.current.value = "";
  };

  return (
    <>
      <div className="container2">
        <div className="hypers">
          <h4 className="hyp1">Let's Build Something</h4>
          <h4 className="hyp1">Amazing with GPT-3</h4>
          <h4 className="hyp1">OpenAI</h4>
        </div>

        <div className="paraghraphs">
          <p className="pg">Yet bed any for travelling assistance indulgence unpleasing</p>
          <p className="pg">Not thought all exercise blessing. Indulgence way</p>
          <p className="pg">Everything joy alteration boisterous the attachment. Party</p>
          <p className="pg">We years to order allow asked of</p>
        </div>

        <form onSubmit={handleSubmit} className="input-button">
          <input
            className="input-em"
            type="email"
            placeholder="Your Email Address"
            ref={addEmail}
          />
          <button className="btn" type="submit">Get Started</button>
        </form>

        <div className="Last-up">
          <p className="pg">+1600 people requested access in the last 24 hours</p>
        </div>
      </div>

      <div className="cantainer-image">
        <img className="image" src={Ai} alt="GPT Illustration" />
      </div>
    </>
  );
};

export default Page1;
