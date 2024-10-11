
import React from "react";
import {
    BrowserRouter,
    Link,
    Route,
    useLocation,
    Routes
} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import 'App.css'
import Layout from "./components/layout/Layout.jsx";
import {InfoBusiness} from "./components/InfoBusiness/InfoBusiness.jsx";
import {ChoicePlatform} from "./components/ChoisePlatform/ChoicePlatform.jsx";
import {Header} from "./components/Header/Header.jsx";


const App = () => {
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

