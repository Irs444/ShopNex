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
                type:"loginRequest",
                payload:data?.message,
        });

    }catch(error){
        dispatch({
            type:"loginFail",
            payload:error.response.data.message
        });

    }
}