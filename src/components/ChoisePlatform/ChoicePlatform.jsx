import * as React from 'react';
import S from './ChoicePlatform.module.scss'
import Quest from "../../assets/question.svg";
import {Choice} from "../shared/Choice/Choice";
import {useState} from "react";
import { senData, setChoicePlatformRedux} from "../../store/main/main.js";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const ChoicePlatform = () => {
    const [isHover, setIsHover] = useState(false)
    const choice=useSelector(state => state.main.ChoiceUsePlatform)
    const dispatch = useDispatch()
    const choiceHandler = (el) => {
        dispatch(setChoicePlatformRedux(el))
    }

    const handlerNext=()=>{
        dispatch(senData())
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
                    {choice.map(el => <Choice key={el.item} action={choiceHandler}
                                                         item={el}
                                                         />)}
                </div>
                <div className={S.btnNav}>
                    <Link to={"/"}>
                        <button className={S.back}>Назад
                        </button>
                    </Link>
                    <button onClick={handlerNext} className={S.next}>Продолжить</button>
                </div>
            </div>
        </div>
    );
};