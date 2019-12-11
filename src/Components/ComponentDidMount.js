import React,{Component} from 'react';

class ComponentDidMount extends Component{
   getStyle=() =>{
       return{
           backgroundColor: 'red',
           

       }
   }



   state={
       series: []
   }
   
    componentDidMount(){
        const series=["TV","AC","Fridge"]
        setTimeout(() => {
          this.setState({
              series : series
          })
        },2000)
    }

    render(){
        return(
            <div style={this.getStyle()}> 
            <h1>We Offer {this.state.series.length} Products For You!!!</h1>
            </div>
        )
    }
}

export default ComponentDidMount;