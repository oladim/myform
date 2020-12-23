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

// function mapStateToProps(reduxState){
//   return {
//     form: reduxState.form
//   }
// }
export default ContactForm






// import React from 'react'
// import {reduxForm, Field} from 'redux-form'; 
// import {useState} from 'react';
// import {connect} from 'react-redux';

// function Data(props) {
//     // const[firstname, setFirstname] = useState();
//     // const[lastname, setLastname] = useState();

//     // const handleClick = (e)=>{
//     //     e.preventDefault();
//     //     console.log(props)
//     // }
//     return (


//             // <reduxForm>
//             // <input type="text" placeholder="firstname"  value={firstname} onChange={e => setFirstname(e.target.value)} name="firstname"/>
//             // <input type="text" placeholder="lastname"  value={lastname} onChange={e => setLastname(e.target.value)} name="lastname" />
//             // <button type='submit' onClick={handleClick}>Submit</button>
//             // </reduxForm>
    
//     )
// }

// function mapStateToProps(reduxState){
//     return {
//       data: reduxState.data
//     }
//   }

  
// export default connect(mapStateToProps)(Data)
