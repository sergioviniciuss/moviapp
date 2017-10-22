import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Body from './Body';

class App extends Component {
    render () {
        return (
            <div className="">
                <Header />
                <Body />
            </div>

        )
    }
}

export default App;