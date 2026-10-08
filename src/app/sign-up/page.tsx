"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
    // form er data handler

    const onSubmit = async(e:React.SubmitEvent<HTMLElement>)=>{  
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {name:string, email:string, password:string, image:string,}
        // console.log('form er data',user)

        // todo: better auth

        const {data, error} = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
            callbackURL : "/"
        })
        if(data){
            toast.success('Sign Up Successfully')
            console.log(data)
            redirect("/")
            
        }
        if(error){
            toast.error(error.message??'Something Went Wrong')
            console.log(error)
        }

    }

    // todo: google sign up handle
    const handleGoogleSignUp = async()=>{
         const data = await authClient.signIn.social({
    provider: "google",

  });
  console.log("google er data", data)
        

    }
    
    return (
        <div className='flex  flex-col justify-center items-center '>
            <h1 className='text-2xl text-red-700 font-semibold p-5'>সাইন আপ</h1>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset  border-base-300 rounded-box w-md  p-4 ">
                    <label className="label">নাম</label>
                    <input name="name" type="text" className="input w-md" placeholder="Name" />

                    <label className="label">Image</label>
                    <input name="image" type="url" className="input w-md" placeholder="ImangeUrl" />




                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button type = 'submit'className="btn bg-red-600 text-white mt-4">সাইন আপ করুন</button>
                </fieldset>
            </form>
            <p><small>Or</small></p>
            <button  onClick={handleGoogleSignUp}className="btn bg-red-600 text-white m-2 "><small>Sign Up with google</small></button>


        </div>
    );
};

export default SignUpPage;