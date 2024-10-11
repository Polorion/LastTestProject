import * as React from 'react';
import S from './Choice.module.scss'

export const Choice = ({ item, action}) => {


    const handlerChoice = (el) => {
            action(el)
    }
    return (
        <div onClick={() => {
            handlerChoice(item)
        }} className={`${S.body} ${item.active && S.active}`}>
            {item.text}
        </div>
    );
};