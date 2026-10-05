 
//  navs link er type
 export interface Inavs {
    slug: string,
    title: string,
    topicId: string,
    url: string,
    scrapable: boolean
}

// marquee er type

export interface Imarquee{
     id: string,
      title: string,
      description: string,
      link:string,
      imageUrl: string,
      imageAlt: string,
      category: string,
      type: string,
      isLive:boolean,
      firstPublished: string,
      lastPublished:string,
      source:string
}