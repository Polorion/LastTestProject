import * as React from 'react';
import S from './Choice.module.scss'

export const Choice = ({ item, action,mobile}) => {


    const handlerChoice = (el) => {
            action(el)
    }
    return (
        <div onClick={() => {
            handlerChoice(item)
        }} className={`${S.body} ${item.active && S.active} ${mobile&&S.mobile}`}>
            {item.text}
        </div>
    );
};