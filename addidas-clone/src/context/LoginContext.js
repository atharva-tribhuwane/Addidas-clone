import React from 'react'
import { useState } from 'react';
export const LoginContext = React.createContext()

export function LoginContextProvider({children}) {
    const [user, setUser]  = useState(null);
    const token = localStorage.getItem('token');
    const [tp,setTP] =  useState("");
    const userDetails = async(id)=>{
        setTP("hello world");
        console.log("inside function and setting context and id is:",id);
        setUser(id);
        console.log("user has been set to :",user);
        console.log(tp);
    }
    // const checkUser = async (token) => {
    //     try {
    //         if (token) {
    //             let res = await fetch('http://localhost:8080/checkUserByToken',{
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'token': token
    //                 }
    //             })
    //             let data = await res.json();
    //             if(data.token)
    //             {
    //                 setUser(data.token);
    //                 return;
    //             }
    //             console.log(data);

    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // React.useEffect( () => {
    //     // checkUser(token)
    // }
    // , [token]);
        
        
  return (
    <LoginContext.Provider value={{ user, userDetails, setUser }}>{children}</LoginContext.Provider>
  )
}