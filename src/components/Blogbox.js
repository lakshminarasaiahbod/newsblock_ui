import React from 'react'
import s from './Blogbox.module.css';

const Blogbox = () => {
  return (
    <div className={`blog-box ${s.blogbox}`}>
      <div className="post-media">
        <a title="">
          <img src="upload/blog_06.jpg" alt="" className="img-fluid" />
          <div className="hovereffect">
            <span></span>
          </div>
        </a>
      </div>
      <div className="blog-meta big-meta">
        <h4><a href="/" title="">I have a desert visit this summer</a></h4>
        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
        <small><a href="/" title="">Lifestyle</a></small>
        <small><a href="/" title="">22 July, 2017</a></small>
        <small><a href="/" title="">by Martines</a></small>
      </div>
    </div>
  )
}

export default Blogbox