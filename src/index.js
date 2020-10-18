import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';

class App extends React.Component{
    constructor(props) { 
        super(props);

        this.state = { lat: null, errorMenssage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),                      
            err => this.setState({ errorMenssage: err.message })
        );
    }

    render() {
        if (this.state.errorMenssage && !this.state.lat) {
            return (            
                <div>Error: {this.state.errorMenssage}</div>
            );    
        }
        if (!this.state.errorMenssage && this.state.lat) {
            return (            
                <SeasonDisplay lat={this.state.lat}/>
            );    
        }

        return (<div>Loading!</div>);
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)