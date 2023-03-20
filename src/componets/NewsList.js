import React, { useEffect, useState } from 'react';

import NewsService from "../service/NewsService";
//import GuardianNewService from "../service/GuardianNewService";
import NewsItem from "./NewsItem";
import { SearchNews } from './SearchNews';

export const NewsList = () => {

    const [articles, setArticles] = useState([]);
    const [source, setSource] = useState([]);
    
    useEffect(() => {

        fetchNewsFromNewsAPI();
        //fetchNewsFromTheGuardian();
    }, []);

    //fetch new from newsapi
    const fetchNewsFromNewsAPI = async () => { 
        try { 
            const response = await NewsService.getNews();
          
            setArticles(response.data.articles);

        } catch (error) {
            console.log("Something Happened! Check : "+ error);
        }
    }
    //get unique source of news
    articles.map(article => {
       if(!source.includes(article.source.name)){
         source.push(article.source.name)
       }
    });
    /*   //fetch news from the guradian
      const fetchNewsFromTheGuardian = async () => {
          try {
              const response = await GuardianNewService.getNews();
             setArticles(response.data.response.results);
              
          } catch (error) {
              console.log(error);
          }
      } */
    const getArticles = async (searchQuery) => {
        //alert(searchQuery.length);
        if (searchQuery.length > 0) {
            try {
                const FilteredNews = await NewsService.getFilteredNews(searchQuery);
                setArticles(FilteredNews.data.articles);
            } catch (error) {
                console.log(error);
            }
        }
    }
    /* const changeSource=(source)=>{
        setSource(source)
        console.log(source);
        if(source=="newapi"){
            fetchNewsFromNewsAPI();
        }else if(source=="guardian"){
            fetchNewsFromTheGuardian();
        }
    } */
    const filterSource = (selectedSource) => {
        fetchNewsFromNewsAPI();
        const filteredArticles = articles.filter(article => {
            if (article.source.name === selectedSource) {
                
                return article
            }
        })
        
        setArticles(filteredArticles)
    }
    return (
        <div className="container mx-auto my-8 px-4">
            <SearchNews onChange={getArticles} sourceChange={filterSource} source={source} />
            <p>Total {articles.length} news found in search criteria</p>
            <div className=" flex grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-10">
                {articles.map(article => {
                    return (
                        <NewsItem
                            author={article.author}
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                            source={article.source.name}
                            date={article.publishedAt}
                        />
                    )
                })}
            </div>
        </div>
    )
}
