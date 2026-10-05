import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
 export interface Inews{
    imageUrl: string,
    imageAlt:string,
    title: string,
    category: string,
    description:string,
    id: string

}

const NewsCard = ({news}:{news:Inews}) => {

    return (
       <Link href={`/news/${news.id}`}>
        <div className='mt-3 '>
            <div className="card bg-base-100  shadow-sm h-full  overflow-hidden">
                            <figure >
                                <Image src={news.
                                    imageUrl
                                }
                                    alt={news.imageAlt}
                                    height={600}
                                    width={600}
                                    className="h-full w-full object-cover">
            
                                </Image>
                            </figure>
                            <div className="card-body">
                                <p className='text-red-700 font-semibold'>{news.category}</p>
                                <h2 className="card-title">{news.title}</h2>
                                <p>{news.description
                                }</p> 
            
                            </div>
                        </div>
        </div>
       </Link>
    );
};

export default NewsCard;