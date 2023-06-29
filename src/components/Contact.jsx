import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Perform any additional processing or validation here

    // Submit the form data asynchronously
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        // Form submission successful
        console.log('Form submitted successfully');
        setMessageSent(true);
        toast.success('Message sent successfully!',{
            position:toast.POSITION.TOP_CENTER,
            autoClose:3000,
        });
        form.reset(); // Clear the input fields
      } else {
        // Form submission failed
        console.error('Form submission failed');
        toast.error('Failed to send message',{
            position:toast.POSITION.TOP_CENTER,
            autoClose:3000,
        });
      }
    } catch (error) {
      // Handle any errors
      console.error(error);
      toast.error('An error occurred', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Adjust the delay (in milliseconds) as needed
      });
    }
  };

  return (
    <div className='contact'>
      <ToastContainer />
      <main>
        <h1>Contact Us</h1>
        <form action='https://formspree.io/f/mdornwaq' method='POST' autoComplete='off' onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name='name' required placeholder='Abc' autoComplete='off' defaultValue='' />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name='email' required placeholder='Abc@xyz.com' defaultValue='' />
          </div>
          <div>
            <label>Message</label>
            <input type="text" name='msg' required placeholder='Tell us about your query.....' defaultValue='' />
          </div>
          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
