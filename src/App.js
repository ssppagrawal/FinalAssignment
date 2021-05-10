import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "@fire-ui/fire-ui/FireUI.min";
import "@fire-ui/fire-ui/FireUI.min.css";
import Login from "./Components/login.jsx";
import User from "./Components/User/user.jsx";
import Questions from "./Components/Questions/questions.jsx";

const App = () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = {Login} />
            <Route path = "/login" component = {Login} />
            <Route path = "/questions" component = {Questions} />
            <Route path = "/user/:id" component = {User} />
        </Switch>
    </Router>
)

export default App;