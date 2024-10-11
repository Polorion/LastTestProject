import * as React from 'react';
import S from './ChoicePlatform.module.scss'
import Quest from "../../assets/question.svg";
import {choiceUsePlatform} from "../dataStatic/choiceUsePlatform.js";
import {Choice} from "../shared/Choice/Choice";
import {useState} from "react";
import {deleteChoicePlatformRedux, setChoicePlatformRedux} from "../../store/main/main.js";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export const ChoicePlatform = () => {
    const [isHover, setIsHover] = useState(false)
    const [choice, setChoice] = useState([])
    const dispatch = useDispatch()
    const choiceHandler = (el) => {
        setChoice(prevState => [...prevState, el])
        dispatch(setChoicePlatformRedux(el))
    }
    const deleteChoice = (text) => {
        dispatch(deleteChoicePlatformRedux(text))
        setChoice(prevState => prevState.filter(el => el !== text))
    }
    return (
        <div className={S.container}>
            <div className={S.body}>
                <div className={S.header}>
                    <h1>Как вы планируете пользоваться платформой?</h1>
                    <div className={S.subTitle}>
                        <p>
                            Для того, чтобы завершить настройку под Ваш вид деятельности, будьте добры выбрать из
                            нашего
                            функционала,
                            чем Вы планируете пользоваться.
                            <span className={S.icon}>
                            <span
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                            >

                              <Quest/>
                            </span>
                                {isHover && <div className={S.hover}>можно выбрать несколько пунктов</div>}
                        </span>
                        </p>
                    </div>
                </div>
                <div className={S.choice}>
                    {choiceUsePlatform.map(el => <Choice key={el} action={choiceHandler}
                                                         choice={choice} text={el}
                                                         deleteChoice={deleteChoice}/>)}
                </div>
                <div className={S.btnNav}>
                    <Link to={"/"}>
                        <button className={S.back}>Назад
                        </button>
                    </Link>
                    <button className={S.next}>Продолжить</button>
                </div>
            </div>
        </div>
    );
};