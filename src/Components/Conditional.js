import React from 'react';
//import logo from './logo.svg';

function Conditional(props){
    if(props.isLoading === true){
        return(
            <h1>Loading...</h1>
        )
    }
    else{
    return(
        <img src={require('./images/pic.jpg')} alt='pic' width='200'/>
    )
}
}
export default Conditional;