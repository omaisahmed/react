import React from 'react';


 function Exam(props){
     
     return(
     <div>
         <h1>Hello, {props.username}</h1>
         <h3 style={{display: !props.question && "none"}}>Question:{props.question}</h3>
         <h3 style={{color: !props.question && "#888888"}}>Answer:{props.answer}</h3>
         </div>
    );
}
 
export default Exam;