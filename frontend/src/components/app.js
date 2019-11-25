import React from "react"

import {Switch} from "react-router-dom"
import {AuthRoute, ProtectedRoute} from "../util/auth_util"
import MainPage from "./main/main_page"
import NavBarContainer from "./nav_bar/nav_bar_container"
import LoginFormContainer from "./session_forms/log_in_form_container"
import SignUpFormContainer from "./session_forms/sign_up_form_container"
import application from "../styles/application/application.scss"
import tree_index_container from "./trees/tree_index_container"
const App = () => {
    return(    
        <div className="application-container">
            <NavBarContainer/>
            <Switch>
                <AuthRoute exact path={"/"} component={MainPage}/>
                <AuthRoute path={"/login"} component={LoginFormContainer}/>
                <AuthRoute path={"/signup"} component={SignUpFormContainer}/>
                <ProtectedRoute exact path={'/main'} component={tree_index_container} />
            </Switch>
        </div>
    )
}

export default App