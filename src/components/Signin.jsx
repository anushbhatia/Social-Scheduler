import React,{useState} from 'react';
import undraw_login from '../components/assets/images/undraw_Login.svg';
import  '../components/assets/css/Signin.css';
import styled from 'styled-components';

const SocialMediaLinks = styled.ul`
  display: inline;
  list-style:none;
`;

const Content = styled.div`
  width: 70%;
`;
const Authenticate =styled.button`
  width:30%;
`;

const ForgotPasswordButton = styled.button`
  width:50%;
  margin-left:5px;
`;

const OR = styled.div`
  margin:40px;
`;

const LinkedinLink = styled.a`
  justify-content:space-around;
`;

const LinkedinLinkContent = styled.p`
  fontsize:18;
  text-align:center;
`;

const LinkedinIcon = styled.i`
  font-size:32px;
  color:blue;
  float:left;
  background-color:white;
`;


const Signin = () => {
    //const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:''
    });

    const {name, email, password} = formData;

    const onChange = (e) => {
        e.persist();
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const submitForm = async (ev) => {
        // ev.preventDefault();
        // const config = {
        //     headers: {'Accept': 'application/json'}
        // }
        // const res = await axios.post('https://formspree.io/xzbjwkae', formData, config);
        // if (res.status === 200) {
        //     setFormData({name: '', message: '', subject: '', email: ''});
        //     setStatus("SUCCESS");
        // } else {
        //     setStatus("ERROR");
        // }
    }
  return (
    <div>
      <h1 className="text-center">Signin</h1>
      <Content
                className="container-fluid rounded shadow-lg py-4 px-3 mt-5"
            >
                <div className="row mt-2">
                    <div className="col-md-6">
                        <img
                            src={undraw_login}
                            alt="undraw_login"
                            className="float-left"
                            style={{width: "100%", height: "100%"}}
                        />
                        {/* tried to remove this style and replace with styled component image , but stlying disturbed so it was left the same*/}
                    </div>
                    <div className="col-md-6">
                        <form
                            className="needs-validation"
                            noValidate
                            onSubmit={(ev) => submitForm(ev)}
                        >
                            <div className="form-group mb-4">
                                <label className="h5 text-dark contact-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={e => onChange(e)}
                                    placeholder="Eg. Rohan Devaki"
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label className="h5 contact-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    placeholder="Eg. example@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label className="h5 contact-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={e => onChange(e)}
                                    placeholder="Write the subject of the mail here."
                                    required
                                />
                            </div>
                            
                            {/* <div className="form-group text-center">
                                {status === "SUCCESS" ? (
                                    <h5 className="text-success">
                                        Thanks! Your response has been submitted
                                    </h5>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn btn-outline-success rounded-pill shadow"
                                        style={{width: "30%"}}
                                    >
                                        Send
                                    </button>
                                )}
                                {status === "ERROR" && (
                                    <h5 className="text-danger">Oops! There was an error.</h5>
                                )}
                            </div> */}
                            <div className="form-group text-center">
                              <Authenticate
                                type="submit"
                                className="btn btn-outline-success rounded-pill shadow"
                              >
                                SignIn
                              </Authenticate>
                              <ForgotPasswordButton
                                type="submit"
                                className="btn btn-outline-danger rounded-pill shadow"
                              >
                                Forgot your password?
                              </ForgotPasswordButton>
                            </div>
                            <div className="form-group text-center">
                              <label className="h5 contact-label">New to Social-Scheduler ? ,then Register here</label>
                              <Authenticate
                                type="submit"
                                className="btn btn-outline-success rounded-pill shadow"
                              >
                                SignUp
                              </Authenticate>
                            </div>
                            {/* social media links for login */}
                            <div>
                              <OR >
                                <h2><span>OR</span></h2>
                              </OR>
                              <div className="col">
                                <SocialMediaLinks >
                                  <li>
                                    <a href="#" className="fb btn">
                                      <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                                    </a>
                                  </li>
                                  <li className="github-li">
                                    <a href="#" className="github btn">
                                      <i className="fa fa-github "></i> Login with Github
                                    </a>
                                  </li>
                                  <li className="linkedin-li">
                                    <LinkedinLink href="#" className="linkedin btn">
                                      <LinkedinIcon className="fa fa-linkedin-square " ></LinkedinIcon><LinkedinLinkContent >Login with Linkedin</LinkedinLinkContent>
                                    </LinkedinLink>
                                  </li>
                                  <li className="google-li">
                                    <a href="#" className="google btn">
                                      <i className="fa fa-google "></i> Login with Google
                                    </a>
                                  </li>
                                </SocialMediaLinks>
                              </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Content>
    </div>
  )
}

export default Signin;