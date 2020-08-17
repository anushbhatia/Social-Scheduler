import React from "react";
import "./assets/css/components/about.us.css";
import Team from "./assets/images/undraw_team_spirit_hrr4.svg";
//Icons
import Facebook from "./assets/images/facebook.svg";
import Github from "./assets/images/github.svg";
import Instagram from "./assets/images/instagram.svg";
import Linkdin from "./assets/images/linkedin.svg";
import Twitter from "./assets/images/twitter.svg";

const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid heading-background">
                <div className="row">
                    <div className="text-center col-12 col-md-12 col-sm-12 my-5">
                        <h1 className="heading">The Social Scheduler</h1>
                        <p className="tag">Lorem Ipsum has been the industry's standard dummy</p>
                    </div>
                </div>
            </div>
            <div className="container about-backgroud">
                <div className="row">
                    <div className="col-6 col-md-6 col-sm-6 my-5">
                        <img src={Team} alt="team" className="team-image"/>
                    </div>
                    <div className="text-center col-6 col-md-6 col-sm-6 my-5">
                        <h4>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="container social">
                <div className="social-handles">
                    <img src={Facebook} alt="Facebook" className="social-icons my-2"/>
                </div>
                <div className="social-handles">
                    <img src={Github} alt="Github" className="social-icons my-2"/>
                </div>
                <div className="social-handles">
                    <img src={Instagram} alt="Instagram" className="social-icons my-2"/>
                </div>
                <div className="social-handles">
                    <img src={Linkdin} alt="Linkdin" className="social-icons my-2"/>
                </div>
                <div className="social-handles">
                    <img src={Twitter} alt="Twitter" className="social-icons my-2"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
