import { FC,useState,useEffect } from 'react';
import './ndtv.css'
export{}


type News={
    description:string,
    title:string
}	

export const NewsSlider:FC=()=>{
	const [getNews,setGetNews]=useState<News[]>([])

	useEffect(()=>{
		getNewss()
 },[])

 const getNewss=():void=>{
		 fetch(`https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fndtvnews-top-stories.rss`)
		     .then((result) => {
				 result.json().then((resp) => {
					 console.log(resp.items)
					 setGetNews(resp.items)
				 })
			 })
 }
return(
    <div className='newsDiv'>
        {getNews.map((e,key)=>(
            <>
            <div className="newsItems">
            <h1 key={key}>{e.title}</h1>
            <hr></hr>
            <p>{e.description}</p>
            </div>
            </>
        ))}
    </div>
)
	
}


