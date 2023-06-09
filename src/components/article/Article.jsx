import React from 'react';
import './article.css';

const Article = ({ imageURL, date, title}) => {
  return (
    <div className='gpt__blog-container_article'>
      <div className='gpt__blog-container_article-image'>
        <img src={imageURL} alt="Blog Image" />
      </div>
      <div className='gpt__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article