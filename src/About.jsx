import React from 'react';
import about_top from '../src/images/images/about_top.jpg';
import about_middle from '../src/images/images/about_middle.jpg';
import about_bot from '../src/images/images/about_bot_1.gif'

export default function About() {
  return (
    <div>
      <div className='about_top'>
        <div className='a_t_l'>
          <img src={about_top} alt='About' className='about_top_img'/>
        </div>
        <div className='a_t_r'>
          <h2 className='a_t_r_1'>Helping businesses standout and shine through branding and website design</h2>
          <div className='a_t_r_2'>Let’s talk candidly for a second, if you are reading this then it is very  likely that you feel your brand or website are not performing as well as they could. Whether you originally bootstrapped your business design  (let’s face it we’ve all been there!) or have a brand and website that you have outgrown and no longer fits your vision, chances are you most likely limiting the kind of growth you could be experiencing from having a hype-worthy, client-magnetising brand presence that people can’t help but talk about. </div>
          <h2 className='a_t_r_3'>In your heart you know it’s time for a change</h2>
          <div className='a_t_r_4'>Your business has so much potential to grow and become the vision you have in your mind. The one where your ideal clients can’t wait to sign up, don’t quibble over your prices and see you as the only business they want to consider. </div>
          <div className='a_t_r_5'>But to get to that some things are going to have to change. Truth is that old brand style and outdated website aren’t communicating your expertise and value, when it could instead be helping you convert your visitors into revenue for your growing business.</div>
        </div>
      </div>
      <div className='about_mid_grn'>
        <h2 className='about_mid_grn_1'>What you really want to know is… </h2>
        <h2 className='about_mid_grn_2'>“do I really need a standout brand to achieve this ?”</h2>
        <div className='about_mid_grn_3'>Well yes, in a nutshell you do! Standout brands are the ones that people chat about, that stick in peoples minds and are offered up as treasured and trusted ‘word of mouth’ referrals. These are highly prized forms of organic marketing that can’t be bought or faked and therefore are the holy grail for businesses. </div>
      </div>
      <div className='about_bot_1'>
        <div className='about_bot_l'>
          <div className='about_bot_l_1'>are we a good fit?</div>
          <div className='about_bot_l_2'>Social Magpie Design is for</div>
          <div className='about_bot_l_3 about_bot_l_item'>fearless pioneers</div>
          <div className='about_bot_l_4 about_bot_l_item'>passionate storytellers</div>
          <div className='about_bot_l_5 about_bot_l_item'>big dreamers</div>
          <div className='about_bot_l_6 about_bot_l_item'>unforgettable brands</div>
          <div className='about_bot_l_7 about_bot_l_item'>standout websites</div>
        </div>
        <div className='about_bot_r'>
          <img src={about_bot} className='about_bot_img' alt='Social Maagpie Design'/>
        </div>

      </div>
     
      <div className='values_div'>
        <div className='values_heading'> studio values</div>
      <div className='values'>
        <div className='values_1'>
          <h2 className='values_h2'>Considered</h2>
          <div className='values_main'>Every design element is part of a considered process - what does it convey and how does this fit within the overall design? This  approach leads to design packed with intention and purpose.</div>
        </div>
        <div className='values_2'>
        <h2 className='values_h2'>Collaborative</h2>
          <div className='values_main'>A client’s input into the design of their brand and website is invaluable as nobody knows their business better, therefore a collaborative approach is at the heart of our process.</div>
        </div>
        <div className='values_3'>
        <h2 className='values_h2'>Empowering</h2>
          <div className='values_main'>There is nothing better than hearing from clients how their new brand and website has made them feel more confident, as well as having valuable tools to grow their business.</div>
        </div>
      </div>
      </div>
      <div className='about_mid_2'>
        <div className='a_m_2_l'>
             <h2 className='a_m_2_l_1'>
             I’m Cathrin, owner and the creative behind Social Magpie Design.
             </h2>
             <div className='a_m_2_l_2'>If this is the first time our paths have crossed hello and welcome. I’m a British designer who lives in the beautiful English countryside but I work with clients all over the world. </div>
             <div className='a_m_2_l_3'>I feel immensely lucky to spend my time working with inspirational clients who are building businesses on their own terms. Seeing a client’s reaction to their brand or website coming to life and finally feeling authentically represented is one of the best parts of my job.</div>
        </div>
        <div className='a_m_2_r'>
              <div class="octagon-container port_top_item mid_img">
                <img class="octagon-image about_middle_img" src={about_middle} alt="Octagon Image"/>
              </div>
        </div>

      </div>
      <div className='about_bottom'>
        <div className='about_bottom_1'>
        Ready to  <span className='about_bottom_spcl'>make a change?</span>
        </div>
        <button className='about_bottom_btn'>step this way  </button>
      </div>
    </div>
  )
}
