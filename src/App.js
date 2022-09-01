import React, {useContext, useState} from "react";
import Header from "./Components/Header";
import Ugly from "./Components/Ugly";
import Footer from "./Components/Footer";

const App = () => {

  return (
    <div className="App">
        <Header/>
        <Ugly/>
        <Footer/>
    </div>
  );
}

export default App;
