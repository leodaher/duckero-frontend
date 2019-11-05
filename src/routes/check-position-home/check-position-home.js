import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { ParticlesBackground } from "../../components/particles-background";

const CheckPositionButton = props => {
  return (
    <Row style={{ marginTop: "100px" }}>
      <Button
        style={{ height: "100%", backgroundColor: "#8EE4AF" }}
        variant="contained"
        onClick={props.handleClick}
      >
        Verificar posição
      </Button>
    </Row>
  );
};

export default class CheckPositionHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToWaitlist: false,
      redirectToHome: false
    };
  }

  componentWillMount() {
    const {
      match: { params }
    } = this.props;
    fetch("http://localhost:5000/users/" + params.id)
      .then(response => {
        if (response.status != 200) {
          this.setState({
            redirectToHome: true
          });
        }

        return response.json();
      })
      .then(data => {
        this.setState({
          user: data.user
        });
      });
  }

  handleCheckPositionClick() {
    this.setState({
      redirectToWaitlist: true
    });
  }

  render() {
    const { redirectToWaitlist, redirectToHome } = this.state;

    if (redirectToHome) {
      return <Redirect push to={{ pathname: "/" }} />;
    }

    if (redirectToWaitlist) {
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
          <CheckPositionButton
            handleClick={() => this.handleCheckPositionClick()}
          />
        </Container>
      </div>
    );
  }
}
