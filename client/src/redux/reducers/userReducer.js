
//importing user Actions
import {ADD_USER_DETAILS, REMOVE_USER_DETAILS} from "../actionType/UserActionType";
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
    role:''
}
//creating user Reducer
export const userReducer=(state=intialState,action)=>{
    switch (action.type) {
        case ADD_USER_DETAILS:
          const {fullName, email, token,_id} = action.payload;
          return {
            ...state,
           fullName,
           email,
           token,
           _id
          };
        case REMOVE_USER_DETAILS:
          return {
            ...state,
            fullName: "",
            email: "",
          };
        default:
          return state;
      }
}