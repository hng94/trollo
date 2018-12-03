import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { connect } from "react-redux";
import { history } from "../helpers";
import { PrivateRoute } from "./PrivateRoute";
import  LoginPage  from "./LoginPage";
import  RegisterPage  from "./RegisterPage";

class App extends Component {
  render() {
    const { alert } = this.props;

    return (
        <div className="container-fluid">
            <div className="col-sm-12">
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                    </div>
                </Router>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({ alert: state.alert });

export default connect(mapStateToProps)(App);
