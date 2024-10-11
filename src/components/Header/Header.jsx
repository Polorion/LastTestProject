import * as React from 'react';
import S from './Header.module.scss'
import logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <div className={S.body}>
            <div className={S.logo}>
                <img src={logo} alt=""/>
            </div>
        </div>
    );
};