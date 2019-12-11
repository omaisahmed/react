import React from 'react';

function DateTime(){
   const date = new Date();
    var hours=date.getHours();
    let TimeOfDay;

    var styles={
        color:'blue',
        backgroundColor:'red',
        fontSize:'50px'
        
    }  

    
    if(hours>12){
        TimeOfDay="Morning!!!";
        styles.color="blue";

    }
    else if(hours<12 && hours>17){
        TimeOfDay="Afternoon!!!"
    }
    else{
        TimeOfDay="Night!!!"
    }

    
    return(
<div>
<h1 style={{color:'red',backgroundColor:'yellow'}}>Good {TimeOfDay}</h1><p style={styles}>External CSS</p>
    </div>
    );
}
export default DateTime;