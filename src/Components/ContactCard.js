import React from 'react';
 function ContactCard(props){
     
     return(
<div className='contact-card'>
<img styles={{width:'200px',height:'200px'}} src={props.imageUrl} alt='cat'/>
<img styles={{width:'200px',height:'200px'}} src='https://i.ytimg.com/vi/YuWgXEDJYCo/hqdefault.jpg' alt='cat'/>
<h1>phone:{props.phone}</h1>
<p>email:{props.email}</p>
</div>
     );
 }
 export default ContactCard;