import * as React from 'react';
import S from './Choice.module.scss'

export const Choice = ({text, choice, action, deleteChoice}) => {
    const isActive = choice?.filter(el => {
        if (el === text) {
            return el
        }
    })
    const handlerChoice = (el) => {
        if (isActive[0] === text) {
            deleteChoice(text)
        } else {

            action(el)
        }

    }
    return (
        <div onClick={() => {
            handlerChoice(text)
        }} className={`${S.body} ${isActive[0] === text && S.active}`}>
            {text}
        </div>
    );
};