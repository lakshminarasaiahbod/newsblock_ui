import React from 'react';
import { NavLink } from 'react-router-dom';
import { getDDMonthYYYY } from '../utils/helpermethods';
import s from './Blogbox.module.css';

const BlogboxMeta = props => {

  const DateObj = Date.parse(props.publishedTime);

  return (
    <div className={`blog-box ${s.blogbox} ${props.className}`}>
      <div className="col-md-12 px-0">
        <div className={`post-media ${s.postmedia}`}>
          <img src={props.blogImage} alt="" className="img-fluid" />
        </div>
      </div>

      <div className="blog-meta big-meta col-md-12 pt-2">
        <div className={s.postTitle}><NavLink to={`/blog/${props.id}`}>{props.title}</NavLink></div>
        <small><NavLink to={`/cat/${props.category}`}>{props.category}</NavLink></small>
        {props.DateObj && <small>{getDDMonthYYYY(DateObj)}</small>}
        {props.author && <small>by {props.author}</small>}
      </div>
    </div>
  )
}

export default BlogboxMeta