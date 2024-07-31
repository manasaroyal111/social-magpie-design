import React from 'react';
import { useState } from 'react';
import Inputeach from './Inputeach';

export default function Form() {

    const [formData, setFormData] = useState({
        'name' : '',
        'email' : '',
        'business': '',
        'service' : '',
        'budget' : ''
    })

  function handleChange(e){
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name] : value,
    })
  }


  function handleSubmit(e){
    e.preventDefault();
    alert('Form Submitted Successfully!!')
  }


  return (
    <div className='contact_form'> 

        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name (required)</label>
          <Inputeach
           type='text' 
           name='name'
           id='name'
           value={formData.name}
           onChange={handleChange}
           />
          <label htmlFor='email'>Email (required)</label>
          <Inputeach 
          type='email' 
          name='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          />
          <label htmlFor='business'>Please tell me a bit about your brand and business, and what you're looking for.
           (required)</label>
           <br/>
          <textarea
           value={formData.business}
           type='text' 
           name='business'
           id='business'
           rows='6'
           onChange={handleChange}
           />
           <br/>
          <label htmlFor='service'>What services are you interested in?
           (required)</label>
          <Inputeach
           type='text' 
           name='service'
           id='service'
           value={formData.service}
           onChange={handleChange}
           />
          <label htmlFor='budget'>What is your budget for this project?
           (required)</label>
          <Inputeach 
          type='text' 
          name='budget'
          id='budget'
          value={formData.budget}
          onChange={handleChange}/>
          <button type='submit' className='contact_btn'>Submit</button>
        </form>

    </div>
  )
}
