import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import isAuthenticated from '../../utils/auth';
import LoadingRoute from '../../components/loading-route';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }

    abortController = new AbortController()

    componentWillMount() {
        const token = window.sessionStorage.getItem('rb_auth_token');
        this.setState({
            loading: true
        });

        isAuthenticated(token, this).then((result) => {
            this.setState({
                authenticated: result,
                loading: false
            });
        });
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        if (this.state.loading) {
            return (<Route path={this.props.path} render={() => (<LoadingRoute />)} />);
        }

        const authenticated = this.state.authenticated;
        return (
            <Route path={this.props.path} render={(props) => (
                authenticated === true
                    ? <this.props.component {...props}/>
                    : <Redirect to='/' />
            )} />
        );
    }
}

export default PrivateRoute;
