import React, {useContext, useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Ugly from "./Components/Ugly";

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
