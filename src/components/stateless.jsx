import React from 'react';

//Hooks Sin Estado
const Stateless = (props) => {

    const { name } = props;

    if (name) {
        return (
            <h1>Hello {name}</h1>
        );
    }else{
        return(
            <h1>There's no Name</h1>
        );
    }


}

export default Stateless;