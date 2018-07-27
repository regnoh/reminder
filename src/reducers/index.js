import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS} from "../constants";
import { bake_cookie, read_cookie } from 'sfcookies'
const reminder =(action)=>{
    const {text,dueDate}=action;
    return {//新纪录
        text,
        dueDate,
        id:Math.random()
    }
}
const reminders = (state=read_cookie("reminders")||[],action={})=>{
    let reminders = null;
    switch(action.type){
        case ADD_REMINDER:
            reminders = [//数组
                ...state,//原纪录
                reminder(action)//新纪录
            ];
            bake_cookie("reminders",reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = state.filter(reminder=>reminder.id !== action.id);// 返回id对应的其他reminder
            bake_cookie("reminders",reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = []
            bake_cookie("reminders",reminders);
            return reminders;
        default:return state;
    }
}
export default reminders;