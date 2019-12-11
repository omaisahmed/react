import React,{Component} from 'react';


 class LoggedInOut extends Component{
      constructor(){
        super()
        this.state={
            isLoggedon:false
        }
        this.handleClick=this.handleClick.bind(this)
      }

      handleClick(){
        this.setState(prevState =>{
          return{
            isLoggedon : !prevState.isLoggedon
          }
        })
      }

      render(){
  let buttonText=this.state.isLoggedon ? "LOG OUT" : "LOG IN"
  let displayText=this.state.isLoggedon ? "Logged In" : "Logged Out"
  return(
      <div>
          <button onClick={this.handleClick}>{buttonText}</button>
      <h1>{displayText}</h1>
          </div>
  )
}
 }
      export default LoggedInOut;