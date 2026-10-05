
import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IotherSection {
  curationId: string,
  title: string
  articles: {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string
  }[];

}

export default async function Home() {
  // data fetching:

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const section = data.data
  const mainNews = section[0].articles

  const othersSection  = section.slice(1)
  console.log('others page er data', othersSection)
  const filterOtherSection:IotherSection[] = othersSection.filter((others:IotherSection, index:number) => {
  return index !== 1 && index !== 9 && index !== 3;
});





  return (
    
    <div className="">
      


      
      <div className="grid grid-cols-3 con container mx-auto gap-7">
        {/* news section */}
        <div className="   col-span-2">
          <MainNews news={mainNews}></MainNews>

          <div className="grid gap-2 mt-8">
            {
              filterOtherSection.map(others => <div key={others.
                curationId
              }>

                <h1 className="font-bold border-b-2 border-red-600 py-2 text-2xl">{others.title}</h1>
                <div className="grid grid-cols-3 gap-3">
                  {
                    others.articles.map(news => <NewsCard key={news.id} news={news}></NewsCard>)

                  }
                </div>
              </div>)
            }
          </div>



        </div>
        {/* headline section */}
        <div className="">
          
          <MostRead></MostRead>
        </div>
      </div>

    </div>
  );
}
