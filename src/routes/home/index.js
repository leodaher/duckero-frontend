import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { TextField, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { ParticlesBackground } from "../../components/particles-background";
import { ClipLoader } from "react-spinners";

const qs = require("query-string");

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      loading: false
    };
  }

  signUp() {
    const ref = this.props.ref;
    this.setState({
      loading: true
    });

    fetch("http://127.0.0.1:5000/sign_up", {
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        ref: ref
      })
    })
      .then(response => response.json())
      .then(data => this.props.postSignUp(data.user));
  }

  render() {
    const { loading } = this.state;
    return (
      <Row style={{ marginTop: "100px" }} className="justify-content-center">
        <Col xs={12} md={9} className="p-0">
          <TextField
            style={{
              backgroundColor: "white",
              borderRadius: "5px"
            }}
            onChange={e => this.setState({ email: e.target.value })}
            id="filled-with-placeholder"
            placeholder="Insira seu e-mail"
            label="E-mail"
            fullWidth
            variant="filled"
          />
        </Col>
        <Col xs={12} md={3} className="pl-2">
          <Button
            onClick={() => this.signUp()}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#8EE4AF"
            }}
            variant="contained"
          >
            {loading ? (
              <ClipLoader size={30} color={"#000000"} loading={true} />
            ) : (
              <a>Cadastrar</a>
            )}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSignUpSuccess = this.handleSignUpSuccess.bind(this);

    this.state = {};
  }

  componentDidMount() {
    const query = this.props.location.search;
    if (query) {
      this.setState({ ref: qs.parse(query).ref });
    }
  }

  handleSignUpSuccess(user) {
    this.setState({
      user: user,
      redirect: true
    });
  }

  render() {
    const redirect = this.state.redirect;

    if (redirect) {
      return (
        <Redirect push to={{ pathname: "/waitlist", state: this.state }} />
      );
    }

    return (
      <div className="app">
        <Container fluid={true} className="app-header">
          <ParticlesBackground />
          <h1>
            <span style={{ color: "#8EE4AF" }}>Robinhood</span> $0 commission
            stock trading
            <br />
            Stop paying up to $10 for every trade
          </h1>
          <Col className="col-sm-12 col-md-8 col-lg-6">
            <SignUpForm
              ref={this.state.ref}
              postSignUp={this.handleSignUpSuccess}
            />
          </Col>
        </Container>
      </div>
    );
  }
}
