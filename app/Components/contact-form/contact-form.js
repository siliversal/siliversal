'use client';
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, {Fragment} from 'react';
import {useForm, ValidationError} from '@formspree/react';
function ContactForm () {
  const [state, handleSubmit] = useForm ('xrgngprp');
  if (state.succeeded) {
    return <p className='thankyou'>Thank you for your interest. We will get back to you soon.</p>;
  }
  if (state.errors) {
    return <p className='thankyou'>error</p>;
  }
  return (
    <Fragment>
      <h1 className='text-2xl py-6 pb-4 font-medium'>Connect with us</h1>
      <p>* Required fields. <br/><br/> </p>
      <form onSubmit={handleSubmit}>
      <div className='c-form float-left wf'>
          <label htmlFor="name">
            First Name*
          </label>
          <input id="firstname" type="firstname" name="firstname" />
          <ValidationError prefix="firstname" field="firstname" errors={state.errors} />
        </div>
        <div className='c-form float-left wl'>
          <label htmlFor="lastname">
            Last Name*
          </label>
          <input 
            id="lastname" 
            type="lastname" 
            name="lastname"
            />
          <ValidationError prefix="lastname" field="lastname" errors={state.errors} /> 
        </div>
        <div className='c-form clear-both'>
          <label htmlFor="company">
            Company Name*
          </label>
          <input id="company" type="company" name="company" />
          <ValidationError prefix="company" field="company" errors={state.errors} />
        </div>
        <div className='c-form'>
          <label htmlFor="email">
            Email Address*
          </label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className='c-form cw float-left'>
          <label htmlFor="country">
            Country Code*
          </label>
          <input id="country" type="country" name="country" />
          {/* <ValidationError prefix="country" field="country" errors={state.errors} /> */}
        </div>
        <div className='c-form pw float-left'>
          <label htmlFor="phone">
            Phone number*
          </label>
          <input id="phone" type="phone" name="phone" />
          {/* <ValidationError prefix="phone" field="phone" errors={state.errors} /> */}
        </div>
        <div className='c-form clear-both'>
          <label htmlFor="message">
            Message*
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
