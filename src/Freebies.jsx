import React from 'react';
import freebie_top from './images/images/freebie_top.jpg';
import Blog_img from './Blog_img';
import freebie_1 from './images/images/freebie_1.png';
import freebie_2 from './images/images/freebie_2.png';
import freebie_3 from './images/images/freebie_3.png'


export default function Freebies() {
  return (
    <div>

<marquee width="100%" direction="right" height="90px" scrollamount='5'>
        <div class="mar_text" style={{fontSize: '60px', fontFamily: 'Playfair Display', fontWeight:'400px', letterSpacing: '4px'}}>Freebies * Freebies * Freebies * Freebies *Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies * Freebies *  Freebies * Freebies *</div>
</marquee>
<div style={{color:'#6c7364', textTransform: 'uppercase', fontSize:'18px', fontFamily: 'Ubuntu', textAlign: 'center', letterSpacing: '1.5px'}}>resources to help you grow business</div>
<div className='freebie'>
    <div className='freebie_div'>
      <Blog_img src={freebie_1}/>
      <h2 className='freebie_h2'>new year goal setting planner</h2>
    </div>
    <div className='freebie_div'>
    <Blog_img src={freebie_2} /> 
    <h2 className='freebie_h2'>canva moodboard template</h2>
   
    </div>
    <div className='freebie_div'>
    <Blog_img src={freebie_3}/>
    <h2 className='freebie_h2'>website  copy planning workbook</h2>

    </div>

</div>
<div className='freebie_sign_up'>
    <h2 className='freebie_sign_up_h2'>
    Want to get the latest  <span className='freebie_spcl'>freebie</span> when it drops?
    </h2>
    <p className='freebie_sign_up_p'>Sign up with your email address to receive news and updates.</p>
    <form className='freebie_form'>
    <input type='email' placeholder='Email Address' required className='freebie_form_input'></input>
    <button className='freebie_btn'>Sign Up</button>
    </form>
    <p className='freebie_sign_up_p2'>We respect your privacy.</p>
</div>

</div>
  )
}
