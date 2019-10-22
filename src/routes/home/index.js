import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { TextField, Button } from '@material-ui/core';
import Particles from 'react-particles-js';
import { Redirect } from 'react-router-dom';

const qs = require('query-string');

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      ref: null,
      redirect: null,
    };
  }

  componentDidMount() {
    const query = this.props.location.search;
    if (query) {
      this.setState({ref: qs.parse(query).ref});
    }
  }

  signUp() {
    fetch('http://127.0.0.1:5000/sign_up', {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        ref: this.state.ref,
      })
    }).then(response => response.json())
      .then((data) => {
          window.sessionStorage.setItem('rb_auth_token', data.token);
          this.setState({
              redirect: true,
              email: data.user.email,
              link: data.user.link,
              ranking: data.user.ranking
          });
      });
  }

  render() {
    if (this.state.redirect) {
        return <Redirect push to={{pathname: '/waitlist', state: this.state}} />
    }

    return (
      <div className="app">
        <Container fluid={true} className="app-header">
          <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                }
              }
            }}
            className="particles-override"
          />
          <h1><span style={{color: "#8EE4AF"}}>Robinhood</span> $0 commission stock trading<br/>Stop paying up to $10 for every trade</h1>
          <Row style={{width: '40%', marginTop: '100px'}} className="justify-content-center">
            <Col xs={12} md={9} className="p-0">
              <TextField
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                onChange={(e) => this.setState({email: e.target.value})}
                id="filled-with-placeholder"
                placeholder="Insira seu e-mail"
                label="E-mail"
                fullWidth
                variant="filled"
              />
            </Col>
            <Col xs={12} md={3} className="p-0 mt-2">
              <Button onClick={() => this.signUp()} style={{height: "100%", backgroundColor: "#8EE4AF"}} variant="contained">
                Cadastrar
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
