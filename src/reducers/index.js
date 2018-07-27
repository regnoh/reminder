import {ADD_REMINDER} from "../constants";

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
        default:return state;
    }
}
export default reminders;