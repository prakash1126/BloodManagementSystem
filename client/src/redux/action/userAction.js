//importing actiontypes
import {
  ADD_USER_DETAILS,
  REMOVE_USER_DETAILS,
} from "../actionType/UserActionType";
//creating add actions
export const addUserDetails = (userDetails) => (dispatch) => {
  dispatch({
    type: ADD_USER_DETAILS,
    payload: userDetails,
  });
};
//creation remove user details actions
export const logoutDetails = () => (dispatch) => {
  dispatch({
    type: REMOVE_USER_DETAILS,
  });
};
