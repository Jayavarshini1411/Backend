import React, { useEffect, useState } from 'react';
import NewsList from './components/NewsList';
import { fetchNews } from '../services/api';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      const response = await fetchNews('top-headlines', { country: 'us' });
      setArticles(response.articles);
      setLoading(false);
    };

    loadNews();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Top Headlines</h1>
      <NewsList articles={articles} />
    </div>
  );
};

export default Home;
