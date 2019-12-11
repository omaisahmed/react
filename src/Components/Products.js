import React from 'react';

 function Products(props){
     
     return(
     <div>
         
         <h3>{props.Products.name}</h3>
         <h3>{props.Products.price}</h3>
         </div>
    );
}
 
export default Products;
