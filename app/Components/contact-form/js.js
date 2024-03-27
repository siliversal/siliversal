'use client';
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, {Fragment} from 'react';
import {useForm, ValidationError} from '@formspree/react';
function ContactForm () {
  const [state, handleSubmit] = useForm ('mdorqrgz');
  if (state.succeeded) {
    return <p className='thankyou'>Thank you for your interest. We will get back to you soon.</p>;
  }
  return (
    <Fragment>
      <h1 className='text-2xl py-6 pb-4 font-medium'>Connect with us</h1>
      <form onSubmit={handleSubmit}>
        <div className='c-form'>
          <label htmlFor="name">
            Name
          </label>
          <input id="name" type="name" name="name" />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>
        <div className='c-form'>
          <label htmlFor="email">
            Email Address
          </label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className='c-form'>
          <label htmlFor="phone">
            Phone number
          </label>
          <input id="phone" type="phone" name="phone" />
          <ValidationError prefix="phone" field="phone" errors={state.errors} />
        </div>
        <div className='c-form'>
          <label htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" className='submit' disabled={state.submitting}>
        CONNECT
        </button>
      </form>
    </Fragment>
  );
}
function App () {
  return <ContactForm />;
}
export default App;
