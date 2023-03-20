import React, { useEffect, useState } from "react";
import NewsService from "../service/NewsService";

export const Preference = () => {
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
      console.log("Something Happened! Check : " + error);
    }
  };
  //lets store unique source of news
  articles.map((article) => {
    if (!source.includes(article.source.name)) {
      source.push(article.source.name);
    }
  });
  return (
    <div className="container py-8">
      <h3 className="flex justify-center text-3xl font-bold text-black">
        Preferences
      </h3>
      <h4 className="flex justify-center">
        Adjust Setting to Personalize your experience on to get the best News
      </h4>

      <div className="my-10 flex justify-center w-full">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Authors
            </label>
            <p>I would like to read news from the Authors listed below.</p>
            <p className="font-bold py-4">{articles.length} Authors</p>
            {articles.map((article) => {
              return (
                article.author && (
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value={article.author}
                      class="w-4 h-4 mx-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {article.author}
                  </div>
                )
              );
            })}
          </div>
          <div>
            <label
              for="source"
              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Sources
            </label>
            <p>Show me news only from the source below.</p>
            <p className="font-bold py-4">{source.length} Sources</p>
            {source.map((sor) => {
              return (
                sor && (
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value={sor}
                      class="w-4 h-4 mx-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {sor}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className=" w-75%  h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Save Preference
        </button>
      </div>
    </div>
  );
};
