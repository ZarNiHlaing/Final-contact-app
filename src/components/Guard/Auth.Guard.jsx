import React, { useEffect } from 'react'
import { useProfileQuery } from '../../store/endpoints/auth.endpoints';
import Loading from '../loading/Loading';
import {useNavigate} from "react-router-dom";


const AuthGuard = ({check,token,children}) => {
  const {data, isError, isLoading} = useProfileQuery();
  const nav = useNavigate();
  // console.log("Auth Guard",data,isError,isLoading);
    useEffect(() => {
        if(check){
            localStorage.setItem("token",JSON.stringify(token));
        }else if (isError){
          nav("/");
        }
        else if (data){
         nav("/home");
        }
    },[data,isError,check]);
  return (
    <div>{isLoading ? <Loading /> : <>{children}</> }</div>
  )
}

export default AuthGuard