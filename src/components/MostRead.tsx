import Link from 'next/link';
import React from 'react';
interface Imost{
    id:string,
    title: string,
}

const MostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const mostRead:Imost[] = data.data
    console.log("most read api",mostRead)
    return (
        <div className=' card p-4 bg-base-100 border border-gray-300 mt-5 grid gap-3 '>
            <h1 className='font-bold text-[20px]'>সর্বাধিক পঠিত</h1>
            {
                mostRead.map((most,index:number) => <Link key={most.id} href= {`/news/${most.id}`}><div className='flex gap-2' key={most.id}>
                    <p className='text-red-600'>{index+1}.</p><h1 className='font-semibold '>{most.title}</h1></div></Link>)
            }
        </div>
    );
};

export default MostRead;