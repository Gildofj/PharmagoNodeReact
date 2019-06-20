import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const List = () => <h2>List</h2>
const Drug = () => <h2>Drug</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/drugs" component={List}/>
                    <Route path="/drugs/:id" component={Drug}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;