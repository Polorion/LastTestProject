import * as React from 'react';
import S from './Title.module.scss'

export const Title = () => {
    return (
        <div className={S.body}>
            <div className={S.title}>Время знакомиться!</div>
            <div className={S.subTitle}>Раскажите о своем бизнесе</div>
        </div>
    );
};