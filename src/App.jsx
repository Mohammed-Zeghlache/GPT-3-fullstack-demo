
import { Routes, Route } from 'react-router-dom';
import Login from "./Bx-project/Login-page/Login";
import Header from "./Bx-project/Header/Header"
import Page1 from "./Bx-project/1st-page/Page1";
import Header2 from "./Bx-project/Header2/Header2";
import Page2 from "./Bx-project/2nd-page/Page2";
import Page3 from "./Bx-project/3rd-page/Page3";
import Page4 from "./Bx-project/4th-page/Page4";
import Page5 from "./Bx-project/5th-page/Page5";
import Page6 from "./Bx-project/6th-page/Page6";
import Last from "./Bx-project/Last-page/Last";
import Library from "./Bx-project/Library-page/Library";
import Whatisgpt from "./Bx-project/What-page/Whatisgpt";
import Case from "./Bx-project/Case-page/Case";
import Openai from "./Bx-project/OpenAI-page/Openai";
import NotFound from "./Bx-project/NotFound-page/NotFound";
import Signin from "./Bx-project/Signin-page/Signin";
import './App.css';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Library" element={<Library/>} />
      <Route path="/WhatisGPt-3" element={<Whatisgpt />} />
       <Route path="/Case-Studies" element={<Case />} />
       <Route path="/Open-AI" element={<Openai />} />
       <Route path="/Login" element={<Signin/>} />
       <Route path="*" element={<NotFound />} />

      {/* <Route path="/Page2" element={<Page2 />} /> */}
      <Route path="/Home" element={
        <> 
         <Header />
          <Page1 />
          <Header2 />
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
          <Last/>
        </>
      }/>
    </Routes>
  );
}

export default App;



