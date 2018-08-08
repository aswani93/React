import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Login } from './Login';
const BasicExample = () => (
  <Router>
       <route exact path="/" component={Login} />
        
    </Router>
);

export default BasicExample;