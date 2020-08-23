import React from 'react';
import '../Detail.css';
import boyimage from './assets/images/boyimage.png';
import girlimage from './assets/images/girlimage.png';
import ContributerData from '../lib/contributers';

class Detail extends React.Component {
  render() {
    return (
      <div className="detail container">
        <div className="container maintainers">
          <h2>Project Maintainers</h2>
          <div className="row"></div>
          <div className="row">
            <div className="col-sm-12 col-md-6" align="center">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={boyimage}
                  alt="Card image cap"
                ></img>
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
                  src={boyimage}
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

          <div className="row  ">
            <div className="col-sm-12 col-md-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={boyimage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>xyz</b>
                  </p>
                  <p className="card-text">
                    <i>Mentor</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={girlimage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>xyz</b>
                  </p>
                  <p className="card-text">
                    <i>Mentor</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={boyimage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>abc</b>
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
          <h2>Contributers</h2>
          <div className="contain">
            <ContributerData />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;