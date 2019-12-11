import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';



class Avatar extends Component{
    constructor(){
        super();
        this.state={
            name:"Welcome To The Avatar World!"
        }
        this.nameChange=this.nameChange.bind(this);

    }

nameChange(){
    this.setState({
        name:"You Have Successfully Subscribed My Channel!!!"
   
    })
        
}

render(){

   const Avatarlistarray=[
       
    {
        id:1,
        name:'Omais',
        work: 'React Developer'
    },
    {
        id:2,
        name:'Azhar',
        work: 'React Native Developer'
    },
    {
        id:3,
        name:'Zahid',
        work: 'Web Developer'
    },
    {
        id:4,
        name:'Aizaz',
        work: 'C# Developer'
    },
   ]

   const avatarcard=Avatarlistarray.map((avatar,i) =>{
       return(
        <Avatarlist id={Avatarlistarray[i].name} name={Avatarlistarray[i].name} work={Avatarlistarray[i].work}/>

       )

   })



    return(
        <div className="main">
        <h1 className="tc">Avatar Mini Project</h1>
            <h1 className="tc">{this.state.name}</h1>
              {avatarcard}
            <button onClick={this.nameChange}>Subscribe</button>
        </div>    
    )

}
}
export default Avatar;