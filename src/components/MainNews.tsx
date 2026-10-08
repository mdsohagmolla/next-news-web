import Image from 'next/image';
import Link from 'next/link';

interface News {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string
}

const MainNews = ({ news }: { news: News[] }) => {

    const firstNews = news[0]

    const otherNews = news.slice(1)
    // console.log('otherNews news', firstNews)
    return (
        <div className='flex gap-4 mt-5 ml-3'>

            <Link href={`/news/${firstNews.id}`}>
                <div className="card bg-base-100 w-100 shadow-sm">
                    <figure>
                        <Image src={firstNews.
                            imageUrl
                        }
                            alt={firstNews.imageAlt}
                            height={600}
                            width={600}>

                        </Image>
                    </figure>
                    <div className="card-body">
                        <p className='text-red-700 font-semibold'>{firstNews.category}</p>
                        <h2 className="card-title">{firstNews.title}</h2>
                        <p>{firstNews.description
                        }</p>

                    </div>
                </div>
            </Link>

            {/* headline */}

            <div className='grid gap-2'>


                {


                    otherNews.slice(0, 4).map(other => <Link href={`/news/${other.id} `} key={other.id}> <div  className='card bg-base-100 border border-gray-300 py-5 px-2 font-semibold' key={other.id}>
                        <p className='text-red-700 font-semibold'>{firstNews.category}</p>
                        <div>{other.title}</div>
                    </div>
                    </Link>)

                }


            </div>


        </div>
    );
};

export default MainNews;