import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
} from 'react-share';
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './social-bar.css';

export default class SocialBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props.url)
        return (
            <div className="post-social">
                <FacebookShareButton url={this.props.url} className="button is-outlined is-rounded facebook" >
                    <Button variant="outlined">
                        <span className="icon" style={{marginRight: "5px"}}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                        <span className="text">Facebook</span>
                    </Button>
                </FacebookShareButton>
                <LinkedinShareButton url={this.props.url} className="button is-outlined is-rounded linkedin">
                    <Button variant="outlined">
                        <span className="icon" style={{marginRight: "5px"}}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </span>
                        <span className="text">LinkedIn</span>
                    </Button>
                </LinkedinShareButton>
                <WhatsappShareButton url={this.props.url} className="button is-outlined is-rounded whatsapp">
                    <Button variant="outlined">
                        <span className="icon" style={{marginRight: "5px"}}>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </span>
                        <span className="text">Whatsapp</span>
                    </Button>
                </WhatsappShareButton>
            </div>
        );
    }
}
