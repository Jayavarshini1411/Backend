import React, { useState } from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import { fetchNews } from '../services/api';

const SearchResults = () => {
  const [articles, setArticles] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetchNews('everything', { q: query });
    setArticles(response.articles);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <NewsList articles={articles} />
    </div>
  );
};

export default SearchResults;
