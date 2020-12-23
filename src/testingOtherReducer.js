import React from 'react'

import {connect} from 'react-redux';

class testingOtherReducer extends React.Component {
    
    // debugger
     handleAddToOtherReducer = () => {
        
        
        this.props.dispatch({
            type: "ADD",
            item: {name: "test", age: 12}
            
        })
        
      
    }
    render(){
        console.log('Items added to redux store', this.props.data)
        
    return (
       <div className="otherReducer">
        <h1>Testing dispatch item added to redux data store. Check console for data retrieved from redux store. <span>This dispatches static data to data store</span></h1>
          <div>
              <button onClick={this.handleAddToOtherReducer}>Testing</button>
  
              </div>
                         
              </div>               
                               
                           
                           
                    
                
                

     
    )
}
}

function mapStateToProps(reduxState) {
   
    return {
        data: reduxState.otherReducer.data
    }
    
   }
   export default connect(mapStateToProps)(testingOtherReducer);