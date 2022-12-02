import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router';
import BlogboxMeta from '../../components/BlogboxMeta';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader/Loader';
import { HOME_RESPONSE } from '../../constants';
import { fetchArticles } from '../requests';
import s from './Category.module.css';

const Category = props => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const { catId, type } = useParams();
  


  useEffect(() => {
   const fetchArticlesofCat = async () => {
    setIsLoading(true);
    const articles = await fetchArticles({ limit: 50, category: catId })
    setData(articles.articles)
    setIsLoading(false);
   }


  fetchArticlesofCat();
   
  }, [catId])
  

  return (
    <Layout>
      {isLoading ? (
        <div className={s.loader}>
          <Loader />
        </div>
      ) : (
        <div className={`row ${s.wrapper}`}>
          {data.map(article => {
            return (
              <BlogboxMeta
                id={article.id}
                category={type}
                title={article.title}
                blogImage={article.ref_img}
                author={article.author}
                publishedTime={article.published_time}
                className={s.card}
              />
            )
          })}
        </div>
      )}
    </Layout>
  )
}

export default Category;