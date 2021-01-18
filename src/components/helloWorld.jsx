import React from 'react';
import Stateless from './stateless';
import StatefulHooks from './statefulHook';

//Stateful
//COMPONENTE CON ESTADO
class MyComponent extends React.Component {

    //propiedades
    state = {
        counter: 0,
        name: "Paila"
    }

    //metodos

    addOneToCount = () => {

        this.setState({
            ...this.state,
            counter: this.state.counter + 1
        });

    }


    render() {
        return (
            <div className='HEllOWORLD'>
                <h1>{this.state.counter}</h1>
                <button onClick={this.addOneToCount}>Add</button>
                <Stateless name="X" />
                <StatefulHooks />
            </div>
        );
    }

}

export default MyComponent;

//JSX

