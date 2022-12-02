import React from 'react';

const Comment = props => {
  return (
    <div class="media">
      <a class="media-left" href="/">
        <img src="upload/author.jpg" alt="" class="rounded-circle" />
      </a>
      <div class="media-body">
        <h4 class="media-heading user_name">Amanda Martines <small>5 days ago</small></h4>
        <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.</p>
        <a href="/" class="btn btn-primary btn-sm">Reply</a>
      </div>
    </div>
  )
}

export default Comment;