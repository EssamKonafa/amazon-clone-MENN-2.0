import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'

function useFetchUser(userId){
    const [userInfo, setUserInfo] =useState({})

    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const userId = Cookies.get('userId')

                const response = await axios.get(`http://localhost:4000/user/${userId}`)
                const theUser = response.data
                setUserInfo(theUser)
                // console.log(theUser);
            }catch(err){
                setUserInfo(null)
                console.error(err);
            }
        }
        fetchUser()
    }, [userId])

    return userInfo
}

export default useFetchUser