import * as React from 'react';
import S from './InfoBusiness.module.scss'
import {useForm} from "react-hook-form";
import quest from '../../assets/question.svg'
import Arrow from '../../assets/arrow.svg'
import {BlockChoice} from "../shared/BlockChoice/BlockChoice.jsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setChoiceBusinessRedux,
    setChoiceCountRedux,
    setChoiceJobRedux,
    setChoiceManagerRedux,
    setChoiceName
} from "../../store/main/main.js";
import {Link} from "react-router-dom";

export const InfoBusiness = () => {
    const nameValue = useSelector(state => state.main.name)
    const jobForm = useSelector(state => state.main.formJob)
    const dataBusinessForm = useSelector(state => state.main.formBusiness)
    const countForm = useSelector(state => state.main.formCount)
    const choiceHelperForm = useSelector(state => state.main.FormManager)
    const dispatch = useDispatch()


    const {register, handleSubmit, formState, clearErrors} = useForm({
        mode: "onTouched"
    })

    return (
        <div className={S.body}>
            <div className={S.header}>
                <h1>Время знакомиться!</h1>
                <p>Раскажите о своем бизнесе</p>
            </div>
            <form className={S.form}>
                <div className={S.bodyInput}>
                    <input value={nameValue} onInput={(e) => {
                        dispatch(setChoiceName(e.target.value));
                    }} placeholder="Введите имя" className={S.nameInput} {...register('name', {
                        required: 'поле не должно быть пустым',
                    })} type="text"/>
                </div>
                <div className={S.formaJob}>
                    <BlockChoice action={setChoiceBusinessRedux} title={'Форма бизнеса:'} data={dataBusinessForm}
                                 quest={quest}
                              />
                </div>
                <div className={S.formaJob}>
                    <BlockChoice action={setChoiceJobRedux} title={'Деятельность:'} data={jobForm}
                                 />
                </div>
                <div className={S.formaJob}>
                    <BlockChoice action={setChoiceCountRedux} title={'Количество сотрудников в штате:'}
                                 data={countForm}
                               />
                </div>
                <div className={S.formaJob}>
                    <BlockChoice action={setChoiceManagerRedux}
                                 title={'Требуется ли вам личный менеджер для помощи с ONYX CRM? Вся помощь предоставляется бесплатно.'}
                                 data={choiceHelperForm} />
                </div>
            </form>
            <button className={S.nextPage}>
                <div className={S.bodyNext}>
                    <Link to={"/next"}>
                        <p>
                            Продолжить
                        </p>
                        <div className={S.none}>
                            <Arrow/>
                        </div>
                    </Link>
                </div>
            </button>
        </div>
    );
};