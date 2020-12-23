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
   // ...other reducers here
  otherReducer,
 
  // you have to pass formReducer under 'form' key,

  form: formReducer
})

export default rootReducer
