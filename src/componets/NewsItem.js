import React from 'react';

const NewsItem =({author,title, description, url, urlToImage,source, date})=>{

    return(
        <div className="py-9 h-full">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={urlToImage} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-mono mb-2">Source :  {source}</div>
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span>By
                    <i className="inline-block   px-3 py-1 text-sm
                           font-semibold text-gray-700 mr-2 mb-2">{author} </i>
                    <i> Published AT {}</i>
                    </span>

                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                           font-semibold text-gray-700 mr-2 mb-2"><a href={url}>Read more</a></span>
                </div>

            </div>
        </div>

    )
}
export default NewsItem;