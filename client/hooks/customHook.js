import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const useCustomHook = (navigation , path = "login") => {

    const {loading, error, message} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(message){
            alert(message)
            dispatch({type:"clearMessage"})
            navigation.reset({
                index:0,
                routes :[{name: path}]
            })
        }
        if(error){
            alert(error)
            dispatch({type:"clearError"})
        }

    },[error, message, dispatch])
    return loading
}