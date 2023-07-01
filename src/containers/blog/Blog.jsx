import React from 'react';
import './blog.css';
import {Article} from '../../components/index'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className='gpt__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>

      </div>
      <div className='gpt__blog-container'>
        <div className='gpt__blog-container_groupA'>
          <Article imageURL={blog01} date="Sep 06, 2020" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt__blog-container_groupB'>
          <Article imageURL={blog02} date="Sep 06, 2020" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageURL={blog03} date="Sep 06, 2020" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageURL={blog04} date="Sep 06, 2020" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imageURL={blog05} date="Sep 06, 2020" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>  
        </div>
      </div>
    </div>
  )
}

export default Blog