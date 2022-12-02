import React from 'react';
import PropTypes from 'prop-types';
import Blogbox from './Blogbox';
import BlogboxMeta from './BlogboxMeta';
import s from './CategorySection.module.css';
import { NavLink } from 'react-router-dom';

const CategorySection = props => {

  const { id, title, articles } = props;
  console.log(props);
  return (
    <div className={`mb-5 ${s.container}`}>
      <div className='row align-items-center justify-content-between px-3'>
        <div className='h2'>{title}</div>
        <NavLink to={`/cat/${id}/${title}`} className={s.view}>View All</NavLink>
      </div>
      <div className={`row ${s.row} py-3 ml-1 custom-scrollbar`}>
        {articles.map(article => {
          console.log(article);
          return (
            <BlogboxMeta
              id={article.id}
              category={title}
              title={article.title}
              blogImage={article.ref_img}
              author={article.author}
              publishedTime={article.published_time}
            />
          )
        })}
      </div>
    </div>
  )
}

CategorySection.defaultProps = {
  title: null,
  articles: []
}

CategorySection.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.object)
}

export default CategorySection;