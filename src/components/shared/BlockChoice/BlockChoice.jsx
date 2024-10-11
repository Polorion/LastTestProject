import * as React from 'react';
import S from './BlockChoice.module.scss'
import Quest from "../../../assets/question.svg";
import {dataBusinessForm} from "../../dataStatic/businesForm.js";
import {Choice} from "../Choice/Choice.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";

export const BlockChoice = ({title, data, choice, action, addRedux, quest = undefined}) => {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()

    const handlerChoice = (el) => {
        action([el])
        dispatch(addRedux(el))
    }

    return (
        <div className={S.body}>
            <div className={S.container}>
                <div className={S.title}>{title}</div>
                {quest && <div onMouseEnter={() => setIsHover(true)}
                               onMouseLeave={() => setIsHover(false)}
                               className={S.img}>{<Quest/>}
                    {isHover && <div className={S.hover}>можно выбрать один из пунктов</div>}</div>}
            </div>
            <div className={S.content}>
                {data.map((el, i) => <Choice action={handlerChoice} choice={choice} key={i} text={el}/>)}
            </div>
        </div>
    );
};