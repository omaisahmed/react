import React,{Component}  from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state={
            fullname:"Omais",
            email:"decentomais90@gmail.com",
            mobileno:"03101095316",
            message:"Hi Omais!!!"
        }
    }

    //handlename=(event)=>{
      //  this.setState({
        //    fullname:event.target.value
       // })
   // }

    //handleemail=(event)=>{
      //  this.setState({
        //    email:event.target.value
        //})
   // }

    //handlemobileno=(event)=>{
      //  this.setState({
        //    mobileno:event.target.value
        //})
    //}

    //handlemessage=(event)=>{
      //  this.setState({
        //    message:event.target.value
        //})
    //}


    handlechange=(event)=>{
        this.setState({[this.state.name]:event.target.value})
    }

    handleSubmit=(event)=>{
       // alert(`My Name is ${this.state.fullname}.
       // My Email is ${this.state.email}.
       // My Mobile Number is ${this.state.mobileno}.
        //Message is ${this.state.message}`)

        alert(JSON.stringify(this.state))
        event.preventDefault();
    }


    


    render(){
        return(
            <div align="center">
            <h1>Contact Form</h1>
            <br/>
            <form onSubmit={this.handleSubmit} >
            <label>Full Name</label>
                <input type="text" value={this.state.fullname} name="name" onChange={this.handlechange}/>
                <br/>

                <label>Email</label>
                <input type="text" value={this.state.email} name="email" onChange={this.handlechange} />
                <br/>

                <label>Mobile Number</label>
                <input type="text" value={this.state.mobileno} name="mobile" onChange={this.handlechange} />
                <br/>

                <label>Message</label>
                <textarea value={this.state.message} name="message" onChange={this.handlechange} />
                <br/>

                <button>Submit</button>

                </form>
                </div>

        
        )
    }

}

export default Form;