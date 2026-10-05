import { Inavs } from '@/type';
import Link from 'next/link';
import React from 'react';

const Navlinks = async () => {

    // data fetching:
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()
    const navs:Inavs[] = data.data
    const filternavs = navs.filter(n => n.scrapable)

    return (
        <div className='flex justify-center gap-3 mb-2'>
           
           <Link  href={'/'}>হোম
</Link>
            {

                filternavs.map((nav, index: number) => <Link key={index} href={`/categori/${nav.slug}`}> {nav.title}</Link>)

            }
        </div>
    );
};

export default Navlinks;