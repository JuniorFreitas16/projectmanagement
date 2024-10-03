// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/projects" component={ProjectList} />
                    <Route path="/project/:id" component={ProjectDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
