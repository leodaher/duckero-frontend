import React, { Component } from "react";
import SocialBar from "../../components/social-bar";
import RBContainer from "../../components/rb-container";

import "../../components/app/App.css";

export default class Waitlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props.location.state;
    return (
      <div className="app">
        <RBContainer color={"#6BA87B"}>
          <h1 style={{ color: "#6BA87B", marginBottom: "20px" }}>Obrigado!</h1>
          <h5>
            <strong>
              Sua atual posição na lista de espera: {user.ranking}
            </strong>
          </h5>
          <p style={{ marginBottom: "30px" }}>
            Obtenha acesso antecipadamente, indicando amigos. Quanto mais amigos
            se cadastrarem, mais cedo você terá acesso
          </p>
          <SocialBar url={"http://localhost:3000/?ref=" + user.id} />
        </RBContainer>
      </div>
    );
  }
}
