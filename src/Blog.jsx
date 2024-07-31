import React from 'react';
import blog_top from '../src/images/images/image (2).png'
import Blog_img from './Blog_img';
import blog_1 from '../src/images/images/blog_1.png'
import blog_2 from '../src/images/images/blog_2.png'
import blog_3 from '../src/images/images/blog_3.png'
import blog_4 from '../src/images/images/blog_4.png'
import blog_5 from '../src/images/images/blog_5.png'
import blog_6 from '../src/images/images/blog_6.png'

export default function Blog() {
  return (
    <div>
      <div className='blog_top'>
        <div className='blog_top_left'>
          <div className='blog_t_l_1'>Design Notes</div>
          <h2 className='blog_t_l_2'>
          A blog dedicated to helping you build your business’s brand and website.
          </h2>
          <div className='blog_t_l_3'>
          Sign up with your email address to receive my weekly newsletter and offers.
          </div>
          <form className='blog_form'>
            <input type='email' placeholder='Email Address' required className='blog_form_input'></input>
            <button className='blog_t_l_btn'>Sign Up</button>
          </form>
          <div className='blog_t_l_last'>We respect your privacy.</div>
        </div>
        <div className='blog_top_right'>

          <img src={blog_top} className='blog_top_img' alt='Blog'/>
        </div>

      </div>
      <div className='blog_bottom'>
        <div className='blog_b_1'>

        <Blog_img  src={blog_1}/>
        <Blog_img  src={blog_2}/>
        <Blog_img  src={blog_3}/>
        </div>
       
        <div className='blog_b_2'>
        <Blog_img  src={blog_4}/>
        <Blog_img  src={blog_5}/>
        <Blog_img  src={blog_6}/>

        </div>

      </div>
    </div>
  )
}
