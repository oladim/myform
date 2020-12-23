import React from 'react'
import { Field, reduxForm } from 'redux-form';


let ContactForm = props => {

  const { handleSubmit } = props
  return (
    <div>
      <h1>This tests data collected from the form and push to redux data store. Check console for data collected</h1>
    <form onSubmit={handleSubmit} className="reduxForm">
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contactFormDetails'
})(ContactForm)


export default ContactForm








