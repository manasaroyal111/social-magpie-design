import React from 'react';
import contact from '../src/images/images/image (4).png';
import Form from './Form';
export default function Contact() {
  return (
    <div>
        <h2 className='contact_h2'>Ready to build a <span className='contact_spcl'> standout </span>
  brand and website?</h2>
 <div className='contact_main'>

    <div className='contact_left'>
        <div className='c_l_t'>
            <img src={contact} alt='Contact' className='contact_img' />
        </div>
        <div className='c_l_b'>
            <div className='c_l_b_1'>Let’s have a <span className='c_l_b_1_spcl'>chat</span></div>
            <div className='c_l_b_2'>I’d love to hear more about your business and design requirements to see how I can help you best. Please complete the form and I will be in touch shortly or skip the form and book in a call with me below.</div>
        </div>

    </div>
    <div className='contact_right'>
<Form />
    </div>

 </div>
    </div>
  )
}
