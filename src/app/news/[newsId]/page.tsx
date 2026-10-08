import { Iparams } from '@/app/categori/[categoriId]/page';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

const NewsDetails = async ({ params }: Iparams) => {
    const { newsId } = await params
    console.log('newsId ', newsId)
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const article = data.data 
    if(!article){
        notFound()
    }
    console.log('article er data', data)
    return (
        <div className='max-w-2xl mx-auto'>
            <h1 className='text-3xl font-semibold m-3'>{article.title}</h1>
            {/* image */}
            <Image src={article.imageUrl}
            
                alt='image'
                width={400}
                height={300}
             className='w-250 rounded-md h-100'></Image>
        {/* text */}
        <p className='my-1'>{article.text}</p>
        </div>
    );
};

export default NewsDetails;