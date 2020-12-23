import React from 'react';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    data: []
   
}

 function otherReducer(state=initialState, action){
    
  switch(action.type){
      case "ADD":
          let newState = {...state};
         
          return {
              ...state, data: [...newState.data, {item: action.item}]
          }
      
      default: 
          return state;    
  }
}

 const rootReducer = combineReducers({
  otherReducer,
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

export default rootReducer
