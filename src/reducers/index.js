import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS} from "../constants";

const reminder =(action)=>{
    const {text,dueDate}=action;
    return {//新纪录
        text,
        dueDate,
        id:Math.random()
    }
}
const reminders = (state=[],action={})=>{
    switch(action.type){
        case ADD_REMINDER:
            return [//数组
                ...state,//原纪录
                reminder(action)//新纪录
            ]
        case DELETE_REMINDER:
        // 返回id对应的其他reminder
            return state.filter(reminder=>reminder.id !== action.id)
        case CLEAR_REMINDERS:
            return []
        default:return state;
    }
}
export default reminders;