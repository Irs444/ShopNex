import { server } from "../../store";
import axios from "axios";

export const login = (email, password) => async(dispatch) => {
    try{
        dispatch({
            type:"loginRequest",
        });
        // hitting node login api request
        const {data} = await axios.post(`${server}/user/login`,
            {email, password},
            {
                headers:{
                    "Content-Type":"application/json",
                },
            }
        );
        dispatch({
                type:"loginSuccess",
                payload:data?.message,
        });

    }catch(error){
        dispatch({
            type:"loginFail",
            payload:error.response.data.message
        });

    }
}


// get user data action

export const getUserData = () => async(dispatch) => {
    try{
        dispatch({
            type:"getUserDataRequest",
        });
        // hitting node login api request
        const {data} = await axios.get(`${server}/user/profile`,
        );
        dispatch({
                type:"getUserDataSuccess",
                payload:data?.user,
        });

    }catch(error){
        dispatch({
            type:"getUserDataFail",
            payload:error.response.data.message
        });

    }
}

//logout

export const logout = () => async(dispatch) => {
    try{
        dispatch({
            type:"logoutRequest",
        });
        // hitting node login api request
        const {data} = await axios.get(`${server}/user/logout`,
        );
        dispatch({
                type:"logoutSuccess",
                payload:data?.message,
        });

    }catch(error){
        dispatch({
            type:"logoutFail",
            payload:error.response.data.message
        });

    }
}
