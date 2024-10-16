
import React, {useEffect} from "react";
import {
    BrowserRouter,
    Link,
    Route,
    useLocation,
    Routes, useNavigate
} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import './App.css'
import {InfoBusiness} from "./components/InfoBusiness/InfoBusiness.jsx";
import {ChoicePlatform} from "./components/ChoisePlatform/ChoicePlatform.jsx";
import {Header} from "./components/Header/Header.jsx";
import {useSelector} from "react-redux";


const App = () => {
    const successResponce = useSelector(state => state.main.success)
    const navigane = useNavigate()
    useEffect(()=>{
        if(successResponce){
    navigane('/N')
        }
    },[successResponce])

    const location = useLocation();
    return (
        <div className="container">
            <TransitionGroup>
                <Header/>
                <CSSTransition key={location.key} classNames="slide" timeout={1000}>
                    <Routes location={location}>
                        <Route path={"/"} element={<InfoBusiness/>}/>
                        <Route path={"next"} element={<ChoicePlatform/>}/>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default App

