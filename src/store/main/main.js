import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    name: '',
    formBusiness: [

        {active:false, text:'ИП'}, {
        active:false,
        text:'АО'}, {
        active:false,
        text:'ООО'}, {
        active:false,
        text:'Самозанятый'}, {
        active:false,
        text:'Не указывать'}

    ],
    formJob: [
        {active:false,
        text:'Здоровье'},
        {active:false,
            text:'Красота'},
        {active:false,
            text:'Образование'},
        {active:false,
            text:'Право'},
        {active:false,
            text:'Продажи'},
        {active:false,
            text:'Аренда'},
        {active:false,
            text:'Авто'},
        {active:false,
            text:'Спорт'},
        {active:false,
            text:'Досуг'},
        {active:false,
            text:'Услуги'},
        {active:false,
            text:'Общепит'},
        {active:false,
            text:'Совмещённая'},
        {active:false,
            text:'Другое'}],
    formCount: [

        {active:false,
            text:'1'},
        {active:false,
            text:'2-5'},
        {active:false,
            text:'6-10'},
        {active:false,
            text:'10+'},


    ],
    FormManager: [


        {active:false,
            text:'Да'},
        {active:false,
            text:'Нет'},
    ],
    ChoiceUsePlatform: [
        {active:false,
            text:'Онлайн запись'},
        {active:false,
            text:'Контроль сотрудников'},
        {active:false,
            text:'Аналитика финансов '},
        {active:false,
            text:'Повышение возврата клиентов'},
        {active:false,
            text:'Интеграции (Телефония и т.д) '},
        {active:false,
            text:'Архив всех записей'},
        {active:false,
            text:'Управление клиентской базой'},
        {active:false,
            text:'Система лояльности'},
        {active:false,
            text:'Автоматический подсчет налога'},
        {active:false,
            text:'Подсчет склада'},
        {active:false,
            text:'Обратная связь клиентов'},
        {active:false,
            text:'Уведомления клиентам'},
        {active:false,
            text:'Пока не определились'},


    ],
    success: false


};

export const senData = createAsyncThunk(
    "cart/senData",
    async (params) => {

        const {data} = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/1`
        );
        return data;
    }
);

export const main = createSlice({
    name: "main",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(senData.pending, (state, {payload}) => {

            state.isLoading = true;
        });
        builder.addCase(senData.fulfilled, (state, {payload}) => {
            state.success = !state.success;
            state.isLoading = false;
        });
        builder.addCase(senData.rejected, (state, {payload}) => {
            state.isLoading = false;
        });

    },
    reducers: {
        setChoiceName: (state, {payload}) => {
            console.log(payload)
            state.name = payload
        },
        setChoiceBusinessRedux: (state, {payload}) => {
            state.formBusiness = state.formBusiness.map(el=>{
                if(el.text===payload.text){
                    return {...el,active:true}
                }
                else {
                    return {...el,active:false}
                }
            })
        },
        setChoiceJobRedux: (state, {payload}) => {
            state.formJob =  state.formJob.map(el=>{
                if(el.text===payload.text){
                    return {...el,active:true}
                }
                else {
                    return {...el,active:false}
                }
            })
        },
        setChoiceCountRedux: (state, {payload}) => {
            state.formCount = state.formCount.map(el=>{
                if(el.text===payload.text){
                    return {...el,active:true}
                }
                else {
                    return {...el,active:false}
                }
            })
        },
        setChoiceManagerRedux: (state, {payload}) => {
            state.FormManager = state.FormManager.map(el=>{
                if(el.text===payload.text){
                    return {...el,active:true}
                }
                else {
                    return {...el,active:false}
                }
            })
        },
        setChoicePlatformRedux: (state, {payload}) => {
            state.ChoiceUsePlatform = state.ChoiceUsePlatform.map(el=>{
                if(el.text===payload.text){
                    return {...el,active:!el.active}
                }
                else {
                    return el
                }
            })
        },
        deleteChoicePlatformRedux: (state, {payload}) => {
            state.ChoiceUsePlatform = state.ChoiceUsePlatform.filter(el => el !== payload)
        },


    },
});

export const {
    setChoiceName,
    setChoiceBusinessRedux,
    setChoiceJobRedux,
    setChoiceCountRedux,
    setChoiceManagerRedux,
    setChoicePlatformRedux,
    deleteChoicePlatformRedux,

    setChoiceChoiceCityStore
} =
    main.actions;

export default main.reducer;
