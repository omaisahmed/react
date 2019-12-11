import React from 'react';

const Avatarlist=(props) =>{
    return(
        <div className="Avatarstyle ma4 bg-light-blue pa3 grow shadow-4 dib tc" >
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt='avatar' />
            <h1>{props.name}</h1>
            <p>{props.work}</p>
            </div>
    )
}

export default Avatarlist;