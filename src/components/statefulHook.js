import React, {useState} from 'react';


const StatefulHooks = () =>{

    
    let [ counter , useCounter ] = useState(0);


    return(
        <div>
            <h2>Contador: {counter}</h2>
            <button onClick={ () => {
                useCounter()
            }}>Add Counter (Hooks)</button>
        </div>
    );


}

export default StatefulHooks;