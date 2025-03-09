import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const {register, handleSubmit, formState:{errors}}  = useForm()
    const Navigate = useNavigate()
    const onSubmit = async (data) => {
        try{
            const url = "http://localhost:7000/auth/signup"
            const response = await fetch(url,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            const { success} = result
            if(success){
                setTimeout(()=>{
                    Navigate('/login')
                }, 1000)
            }
            console.log(result);
            
        }catch(err){
            console.log(err);
        }
    }
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            
                <input placeholder='Name' {...register("name", {required:true, maxLength: 20})}/>
                <br/>
                <input placeholder='Email' {...register("email", {required:true})}/>
                <br/>
                <input placeholder='Password' {...register("password", {required:true, })}/>
                <br/>
            <input type='submit' placeholder='SignIn'/>
        </form>
    </div>
  )
}

export default Signup