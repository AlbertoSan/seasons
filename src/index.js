import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) { 
        super(props);

        this.state = { lat: null, errorMenssage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setstate!!!!!
                this.setState({ lat: position.coords.latitude })

                // wi did not!!!
                //this.state.lat = position.coords.latitude
            },
            
            err => {
                this.setState({ errorMenssage: err.message });
            }
        );
    }

    render() {
        if (this.state.errorMenssage && !this.state.lat) {
            return (            
                <div>Error: {this.state.errorMenssage}</div>
            );    
        }
        if (this.state.lat != null ) {
            return (            
                <div>Latitud: {this.state.lat}</div>
            );    
        }

        return (<div>Loading!</div>);
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)