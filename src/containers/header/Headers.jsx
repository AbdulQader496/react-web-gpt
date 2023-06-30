import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Headers = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>Let's build something amazing with GPT OpenAI</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis</p>
        <div className='gpt__header-content__input'>
          <input type="email" placeholder='Your email' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt__header-content__people'>
          <img src={people} alt="Users" />
          <p>1700 people requested access a visit in 24 hours</p>
        </div>
      </div>
      <div className='gpt__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Headers