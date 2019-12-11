import React,{Component} from 'react';


 class Logged extends Component{
      constructor(){
        super()
        this.state={
            isLoggedIn:true,
        }
      }

      render(){
        var worddisplay;
        if(this.state.isLoggedIn === true){
          worddisplay="in"
        }
        else{
          worddisplay="out"
        }
        return(
            <h1>You are Currntly Logged {worddisplay}</h1>
        )
    }
}
      export default Logged;