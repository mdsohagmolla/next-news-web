'use client'

import { authClient } from '@/lib/auth-client';

import Link from 'next/link';
import React, { useState } from 'react';

const ProfilePage = () => {

    const { data: session } = authClient.useSession()
    // console.log("session er data ", session)
    const user = session?.user
    // console.log('profile er  data', user)

    const [show, setShow]= useState(false)


    // form er handle function

    const handleUpdateUser = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newUser = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, }
        console.log('update  form er data', newUser)

        // update function call

        await authClient.updateUser({
            image: newUser.image,
            name: newUser.name
        })

    }

    const handleShow = ()=>{
        setShow(!show)
    }

    return (
        <div>


            <div className="flex flex-col justify-end items-center gap-2 mt-10">
                {/* user log profile */}

                <Link href={'/profile'}>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-15 rounded-full ring-2 ring-offset-2">
                            <img src={user?.image || "/ronaldo.jpg"}
                                alt='image'


                            ></img>

                        </div>




                    </div>
                </Link>
                <h2 className='text-red-700 font-semibold text-xl'>Name: {user?.name}</h2>
                <p>Email: {user?.email}</p>
                {/* profile update form */}
                <button onClick={handleShow} className='btn bg-red-700 text-white'>প্রোফাইল আপডেট</button>

                {
                  show &&  <form onSubmit={handleUpdateUser}>

                    <fieldset className="fieldset  border-base-300 rounded-box w-md  p-4 ">







                        <label className="label">নাম</label>
                        <input name="name" type="text" className="input w-md" placeholder="Your New Name" />

                        <label className="label">ImageUrl</label>
                        <input name="image" type="text" className="input w-md" placeholder="image" />

                        <button className="btn bg-red-600 text-white mt-4"> আপডেট প্রোফাইল</button>
                    </fieldset>
                </form>
                }



            </div>

        </div>
    );
};

export default ProfilePage;