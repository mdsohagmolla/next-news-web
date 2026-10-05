import NewsCard, { Inews } from '@/components/NewsCard';
import React from 'react';
 export interface Iparams{
    params: Promise<{
        categoriId: string,
        newsId:string,
    }>
}

const CategoriNews = async({params}:Iparams) => {
    const {categoriId }= await params
    // data fetching :
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoriId}`)

    const data = await res.json()
    const categoriNews:Inews[] = data.data
    
    console.log('categori er data',categoriNews)
    return (
        <div className=''>
            <h1 className=' text-2xl font-bold border-b-2 border-red-600
            m-5'>{data.title}</h1>
            <div className='grid grid-cols-3 gap-4 '>
                {
                    categoriNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoriNews;