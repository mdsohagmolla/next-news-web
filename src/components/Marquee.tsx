import { Imarquee } from '@/type';
import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async() => {
    // Todo: fetching data:
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data = await res.json()
    const headlines:Imarquee[] = data.data
    
    return (
        <div className=' bg-red-500 text-white '>
           <div className='flex container mx-auto'>
             <div className='bg-red-700 py-1 px-5 font-bold'>সর্বশেষ</div>
            <MarqueeText direction='right' duration={20} className='py-1'>
            {
                headlines.map((headline, index:number) => <Link href={`/news/${headline.id}`} className='hover:underline' key={index}><span>{headline.title}</span>
                <span className='mx-5'>•</span>
                </Link>)
            }
            </MarqueeText>
           </div>
        </div>
    );
};

export default Marquee;