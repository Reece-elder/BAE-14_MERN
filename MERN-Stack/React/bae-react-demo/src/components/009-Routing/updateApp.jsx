// The code in here is what you should put in your app.js
// rather than rendering <Form/> render this whole browserRouter component tree

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

// Run npm i react-router-dom in your terminal

  <BrowserRouter>
    {/* This will be rendered on EVERY PAGE */}
    <Nav/>
    <Routes>
        {/* When the URL path is / take you to element home */}
        <Route path="/" element={<Home/>}/>
        {/* When the URL path is /about take you to element About */}
        <Route path ="/about" element = {<About/>}/>
        {/* Route with an ID parameter, id can be used in the web page */}
        <Route path="/shop/:id" element ={<Shop/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>