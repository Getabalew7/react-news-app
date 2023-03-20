import React, { useState } from 'react'

export const SearchNews = (probs) => {
  

  const [searchQuery, setSearchQuery] = useState();
  const [filteredSource, setFilteredSource]= useState();

  const handleSearch = e => {

    setSearchQuery(e.target.value);
    probs.onChange(searchQuery);

  }
  const handleSourceChange = e => {
     setFilteredSource(e.target.value);
     probs.sourceChange(filteredSource);
  }

  return (
    <div className='container py-10 flex justify-center w-full'>

      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search News</label>
          <input type="text"
            name="query"
            onChange={handleSearch}
            value={searchQuery}
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search news" />
        </div>
        <div>
          <label for="source" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter by Source</label>
          <select id="source"
            onChange={handleSourceChange}   
            value={filteredSource}
            name="source" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="-1">Select Source</option>
            {
            probs.source.map(source=>{
            return <option key={source} value={source}>{source}</option>
           })
           }  
          </select>
        </div>
      </div>
    </div>
  )
}
