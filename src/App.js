import React, { useState } from "react";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Heading from "./heading";
import Home from "./pages/home";
import About from "./pages/about"
import LoginForm from "./LoginForm";
import Coba from "./coba";
import Data from "./pages/data";
import Formtbhdata from "./crud/formtbhdata";
import Login from "./Login";
import "./style/mystyle.css";
import "./style/tabel.css";
import "./style/card.css";
import "./style/alert.css";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./navbar";
// import LoginForm from "./LoginForm";

const App = () => {
    const [getNavbarValue, setNavbarValue, setNavbarValue2] = useState("");

    const changeNavbarValue = () => {
        setNavbarValue("My About")
    }
    return(
        
        <div>
             <Heading navValue = {getNavbarValue}  />
            <Router>
                <Routes>
                    <Route path='/' element= {<Home />}/>
                    <Route path='/about' element= {<About />}/>
                    <Route path='/LoginForm' element= {<LoginForm />}/>
                    <Route path='/Coba' element= {<Coba />}/>
                    <Route path='/Data' element= {<Data />}/>
                    <Route path='/Formtbhdata' element= {<Formtbhdata />}/>
                </Routes>
            </Router>
           
            
            {/* <p>{getNavbarValue}</p>
            <button onClick={ () => changeNavbarValue()}>Ubah Navigasi</button>   */}
        </div>
    )
}

export default App;