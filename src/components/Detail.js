import React from 'react';
import '../Detail.css';
import ContributerData from '../lib/contributers';

class Detail extends React.Component {
  render() {
    return (
      <div className="detail container">
        <div className="container maintainers">
          <h2>Project Maintainers</h2>
          <div className="row">
            <div className="col-sm-12 col-md-6" align="center">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://avatars0.githubusercontent.com/u/40017559?v=4"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>Anush Bhatia</b>
                  </p>
                  <p className="card-text label">
                    <i>Designer</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6" align="center">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://avatars2.githubusercontent.com/u/46641503?v=4"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>Samaranjit Ghose</b>
                  </p>
                  <p className="card-text">
                    <i>Life Long Learner</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container topmargin maintainers" id="mentor">
          <h2>Mentors</h2>

          <div className="row">
            <div className="col-sm-12 col-md-6" align="center">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://avatars3.githubusercontent.com/u/49617450?v=4"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>abhu-A-J</b>
                  </p>
                  <p className="card-text">
                    <i>Mentor</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6" align="center">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://avatars0.githubusercontent.com/u/36301481?s=400&u=7fd0795b666aadf4eb9c14e1a371689d5c1f6cc9&v=4"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>ashishnagpal2498</b>
                  </p>
                  <p className="card-text">
                    <i>Mentor</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container topmargin maintainers">
          <h2>Contributors</h2>
          <div className="contain">
            <ContributerData />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
