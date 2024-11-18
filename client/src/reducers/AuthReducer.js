const authReducer = (state = { authData: null, loading: false, error: false, updateLoading: false },action) => {//at starting
  switch (action.type) {
    case "AUTH_START":
      return {...state, loading: true, error: false };//return pre state

    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({...action?.data}));//data sended by auth action with key val profile

      return {...state,  authData: action.data, loading: false, error: false };//action data

      case "AUTH_FAIL":
      return {...state, loading: false, error: true };


    case "UPDATING_START":
      return {...state, updateLoading: true , error: false}
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({...action?.data}));//store the new in localstorage
      return {...state, authData: action.data, updateLoading: false, error: false}
    
    
      case "UPDATING_FAIL":
      return {...state, updateLoading: true, error: true}



    case "LOG_OUT":
      localStorage.clear();
      return {...state,  authData: null, loading: false, error: false, updateLoading: false }


    case "FOLLOW_USER":
      return {...state, authData: {...state.authData, user: {...state.authData.user, following: [...state.authData.user.following, action.data]} }}//dest auth data then user to manipulate following
    //spread previous following add act.data(new uid we follow)
    case "UNFOLLOW_USER":
      return {...state, authData: {...state.authData, user: {...state.authData.user, following: [...state.authData.user.following.filter((personId)=>personId!==action.data)]} }}//noi include user unfollow

      default:
      return state;
  }
};

export default authReducer;
