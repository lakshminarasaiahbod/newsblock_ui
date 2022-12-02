import React from 'react';

const CommentsContainer = props => {
  return (
    <div class="custombox clearfix">
      <h4 class="small-title">3 Comments</h4>
      <div class="row">
        <div class="col-lg-12">
          <div class="comments-list">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsContainer;