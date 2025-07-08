import React, { Component } from "react";
import "./AboutUsSection1.css";
import ReactPlayer from "react-player";
import ScrollAnimation from "react-animate-on-scroll";
var url = "https://www.youtube.com/watch?v=Dig_QFPPPtE";
export default class AboutUsSection1 extends Component {
  state = {
    innerWidth: window.innerWidth,
  };
  render() {
    return (
      <div className="aboutus-section1-container">
        <div className="video-section">
          <ReactPlayer
            url={url}
            light
            controls
            playing
            width="100%"
            height={this.state.innerWidth >= 500 ? "300px" : "200px"}
          />
        </div>
        <ScrollAnimation
          animateIn="fadeIn"
          className="aboutus-section1-textblock"
        >
          <h1>Our Story</h1>
          <p>
            Graviky began as an MIT Media Lab experiment when we hacked together
            a tool to capture soot from a burning candle and used the closest
            available solvents - vodka and vegetable oil - to produce a rough
            version of what is now AIR–INK<sup>®</sup>.
          </p>
          <p>
            Later, with Heineken, we launched a global art campaign to create
            awareness about climate change. Subsequently, we collaborated with
            hundreds of artists to create a very successful kickstarter
            campaign.
          </p>
          <p>
            Now, we are a dedicated team working to change industrial production
            with forays into packaging, apparel printing, and advanced
            materials.
          </p>
          <div className="environmental-impact-highlight">
            <h2>85-90% reduction in printing carbon impact</h2>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
