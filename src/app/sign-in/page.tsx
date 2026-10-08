'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const SignInPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string, image: string, }
        console.log('sign in form er data', user)

        // todo: better auth

        const {data, error} = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL : "/"
        })
         

        if(data){
            toast.success('Sign In Successfully')
            console.log(data)
        }
        if(error){
            toast.error(error?.message|| "something went wrong")
            console.log(error)
        }

    }


    return (
        <div className='flex  flex-col justify-center items-center '>
            <h1 className='text-2xl text-red-700 font-semibold p-5'>সাইন ইন</h1>
            <form onSubmit={onSubmit}>

                <fieldset className="fieldset  border-base-300 rounded-box w-md  p-4 ">







                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button className="btn bg-red-600 text-white mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>


        </div>
    );
};

export default SignInPage;