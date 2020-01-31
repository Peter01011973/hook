import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from 'pages/routes'
import {BrowserRouter as Router} from 'react-router-dom';
import TopBar from 'components/topBar'


const App = () => {
    return(
        <div>
            <Router>
                <TopBar />
                <Routes />
            </Router>
        </div>    
    )    
}

ReactDOM.render(<App />, document.getElementById('root'));

