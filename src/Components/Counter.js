import React,{Component} from 'react';


 class Counter extends Component{
      constructor(){
        super()
        this.state={
          count:0
        }
        this.counter=this.counter.bind(this)
      }

      counter(){
        this.setState(prevState => {
          return{
            count: prevState.count + 1
          }
        })
      }

     
        render(){
          return(
            <div>
           <h1 align='center'>{this.state.count}</h1>
           <button style={{marginLeft:'650px'}} onClick={this.counter}>Click Me</button>
           </div>
          )
        }
      }

      export default Counter;