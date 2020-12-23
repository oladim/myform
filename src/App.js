import logo from './logo.svg';
import './App.css';
import Data from './Data';
import OtherReducer from './testingOtherReducer'

import {connect} from 'react-redux';



function App() {

  const submit = values => {
    // print the form values to the console
    console.log('Items from reduxForm in redux store',values)
  }
  return (
    <div className="App">
 




 <div>
     <Data onSubmit={submit} />
     </div>
     <div>
      <OtherReducer />
      </div>



      </div>
  );
}


export default App