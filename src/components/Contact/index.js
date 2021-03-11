import React from 'react';

function ContactForm() {
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form">
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name'/>    
              </div>
              <div>
                <label htmlFor="email">Email Adress:</label>
                <input type="email" name='email'/>
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea type="message" rows='5'/>
              </div> 
          </form>
          <button type='submit'>Submit</button>
        </section>
    )
}

export default ContactForm;