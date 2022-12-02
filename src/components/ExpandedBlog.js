import React from 'react';

const ExpandBlog = props => {
  return (
    <div class="blog-box row">
      <div class="col-md-4">
        <div class="post-media">
          <a href="/" title="">
            <img src="upload/blog_square_06.jpg" alt="" class="img-fluid" />
            <div class="hovereffect"></div>
          </a>
        </div>
      </div>

      <div class="blog-meta big-meta col-md-8">
        <h4><a href="/" title="">10 practical ways to choose organic vegetables</a></h4>
        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
        <small><a href="/" title="">Food</a></small>
        <small><a href="/" title="">10 July, 2017</a></small>
        <small><a href="/" title="">by Matilda</a></small>
      </div>
    </div>
  )
}

export default ExpandBlog;