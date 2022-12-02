import React from 'react'

const Vlogbox = () => {
  return (
    <div className="blog-box">
      <div className="post-media">
        <a href="/" title="">
          <img src="upload/blog_10.jpg" alt="" className="img-fluid" />
          <div className="hovereffect">
            <span className="videohover"></span>
          </div>
        </a>
      </div>
      <div className="blog-meta">
        <h4><a href="/" title="">We are guests of ABC Design Studio - Vlog</a></h4>
        <small><a href="/" title="">Videos</a></small>
        <small><a href="/" title="">21 July, 2017</a></small>
      </div>
    </div>
  )
}

export default Vlogbox