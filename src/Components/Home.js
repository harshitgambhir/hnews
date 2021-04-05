import React from 'react';
import ArticleList from './ArticleList';
import { useContext, useEffect, useState } from 'react';
import {QueryContext} from '../Context/QueryContext';

export default function Home(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const {query} = useContext(QueryContext);

  useEffect(() => {
    const _setArticles = async () => {
      setLoading(true)
      if(!query){
        return
      }
      if(!query.lang){
        return
      }
      let url = `https://gnews.io/api/v4/top-headlines?token=4e4d076bcc47722a313286a882018f3f&lang=${query.lang.value}&country=in`
      if(query.q){
        url = `https://gnews.io/api/v4/search?q=${query.q}&token=4e4d076bcc47722a313286a882018f3f&lang=${query.lang.value}&country=in`
      }
      const res = await fetch(url)
      if (res.status !== 200) {
        throw new Error("Failed to fetch")
      }
      const data = await res.json()
      setArticles(data.articles)
      setLoading(false)
    }
    _setArticles()
  }, [query])

  return (
    <div className="p-4">
      <ArticleList loading={loading} articles={articles} />
    </div>
  )
}