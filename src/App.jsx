// import './App.css'
//
// import {InfoBusiness} from "./components/InfoBusiness/InfoBusiness.jsx";
// import {Route, Routes, useLocation} from "react-router-dom";
// import Layout from "./components/layout/Layout.jsx";
// import {ChoicePlatform} from "./components/ChoisePlatform/ChoicePlatform.jsx";
// import {CSSTransition, TransitionGroup} from "react-transition-group";
//
// function App() {
//     const location = useLocation();
//     return (
//         <div className="container">
//             <TransitionGroup>
//                 <CSSTransition key={location.key} classNames="fade" timeout={300}>
//                     <Routes location={location}>
//                         <Route path={"/"} element={<Layout/>}>
//                             <Route path={""} element={<InfoBusiness/>}/>
//                             <Route path={"next"} element={<ChoicePlatform/>}/>
//                         </Route>
//                     </Routes>
//                 </CSSTransition>
//             </TransitionGroup>
//         </div>
//     )
// }
//
// export default App

import React from "react";
import {
    BrowserRouter,
    Link,
    Route,
    useLocation,
    Routes
} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./app.css";
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

