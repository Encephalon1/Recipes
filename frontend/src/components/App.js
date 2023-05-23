import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header.js';
import Recipe from './Recipe/Recipe.js';

class App extends Component{
    render(){
        return (
            <Fragment>
                <Header />
                <Recipe />
            </Fragment>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));