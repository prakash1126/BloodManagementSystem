
//importing user Actions
import {ADD_USER_DETAILS} from "../actionType/UserActionType";
//defining userState
const intialState={
    fullName:'',
    age:'',
    gender:'',
    date:'',
    country:'',
    city:'',
    temporaryAddress:'',
    permanentAddress:'',
    phoneNumber:'',
    email:'',
    bloodGroup:'',
}
//creating user Reducer
export const userReducer=(state=intialState,action)=>{
    switch (action.type) {
        case ADD_USER_DETAILS:
            const {fullName,email}=action.payload;
            return{
                ...state,
                fullName,
                email
            }
        default:
            return state;
    }
}