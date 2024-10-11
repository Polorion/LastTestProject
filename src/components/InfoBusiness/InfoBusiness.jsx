import * as React from 'react';
import S from './InfoBusiness.module.scss'
import {useForm} from "react-hook-form";
import quest from '../../assets/question.svg'
import Arrow from '../../assets/arrow.svg'
import {dataBusinessForm} from "../dataStatic/businesForm.js";
import {BlockChoice} from "../shared/BlockChoice/BlockChoice.jsx";
import {jobForma} from "../dataStatic/jobForma.js";
import {countForm} from "../dataStatic/countForm.js";
import {choiceHelperForm} from "../dataStatic/choiceHelperForm.js";
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
    const dispatch = useDispatch()

    const [choiceForm, setChoiceForm] = useState([])
    const [choiceJob, setChoiceJob] = useState([])
    const [choiceCount, setChoiceCount] = useState([])
    const [choiceManager, setChoiceManager] = useState([])
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
                    <BlockChoice addRedux={setChoiceBusinessRedux} title={'Форма бизнеса:'} data={dataBusinessForm}
                                 quest={quest}
                                 action={setChoiceForm}
                                 choice={choiceForm}/>
                </div>
                <div className={S.formaJob}>
                    <BlockChoice addRedux={setChoiceJobRedux} title={'Деятельность:'} data={jobForma}
                                 action={setChoiceJob}
                                 choice={choiceJob}/>
                </div>
                <div className={S.formaJob}>
                    <BlockChoice addRedux={setChoiceCountRedux} title={'Количество сотрудников в штате:'}
                                 data={countForm}
                                 action={setChoiceCount}
                                 choice={choiceCount}/>
                </div>
                <div className={S.formaJob}>
                    <BlockChoice addRedux={setChoiceManagerRedux}
                                 title={'Требуется ли вам личный менеджер для помощи с ONYX CRM? Вся помощь предоставляется бесплатно.'}
                                 data={choiceHelperForm} choice={choiceManager} action={setChoiceManager}/>
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