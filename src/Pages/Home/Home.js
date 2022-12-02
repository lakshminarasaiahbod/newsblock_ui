
import React, { useEffect, useState } from 'react'
import CategorySection from '../../components/CategorySection'
import Layout from '../../components/Layout';
import Loader from '../../components/Loader/Loader';
import { fetchArticles, fetchCategories } from '../requests';
import s from './Home.module.css';


const Home = () => {

  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    const getInitialData = async () => {
      const categories = await fetchCategories();
      const requests = categories.map(cat => {
        return fetchArticles({ limit: 5, category: cat.id })
      })
      console.log(requests);
      await Promise.all(requests).then(responses => {
        responses.forEach(res => {
          const ind = categories.findIndex(cate => cate.id === res.id);
          if (ind >= 0) {
            categories[ind].articles = res.articles;
          }
        })
      })
      setCategories(categories);
      setIsLoading(false);
    }
    
    getInitialData();
    
  }, [])

  return (
    <Layout>
      <div>
        {isLoading ? (
          <div className={s.loader}>
            <Loader />
          </div>
        ) : (
          <>
            {categories.map(category => {
              const { id, categoryname, articles } = category;
              return (
                <CategorySection
                  key={id}
                  id={id}
                  title={categoryname}
                  articles={articles}
                />
              )
            })}
          </>
        )}
      </div>
    </Layout>
  )
}

export default Home;