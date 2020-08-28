import React,{useState} from 'react';
import undraw_login from '../components/assets/images/undraw_Login.svg';
import styled from 'styled-components';

const SocialLinks = styled.ul`
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
  h2 { 
    width:100%; 
    text-align:center; 
    border-bottom: 5px solid gray; 
    line-height:0.1em; 
    margin:10px 0 20px;
  } 
  h2 span { 
    background:#fff; 
    padding:0 10px; 
  }

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
  &:hover{
    color:black
  }
`;



const DisplayForLinks = styled.div`
  text-align: center;
  width: 100%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
  justify-content: space-around;

  li{
    margin:10px;
  }
  a{
      width: 90%;
  }

  @media screen and (max-width: 650px) {
    .col {
      width: 100%;
      margin-top: 0;
    }
  }
`;



const SocialMediaLink = styled.a`
  background-color:${props => props.bgColor} ;
  color: ${props => props.color};
  border : ${props => props.border};

  &:hover{
    background-color:${props => props.hoverBgColor};
    color:${props => props.hoverColor};
  }

`;

const Image = styled.img`
  width:100%;
  height:100%;
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
                        <Image
                            src={undraw_login}
                            alt="undraw_login"
                            className="float-left"
                        />
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
                              <DisplayForLinks >
                                <SocialLinks >
                                  <li>
                                    <SocialMediaLink  color ="white" bgColor="#3B5998" href="#" className="btn">
                                      <i className="fa fa-facebook fa-fw"></i> Signin with Facebook
                                    </SocialMediaLink>
                                  </li>
                                  <li >
                                    <SocialMediaLink bgColor="black" color="white" hoverBgColor="darkgrey" href="#" className=" btn">
                                      <i className="fa fa-github "></i> Signin with Github
                                    </SocialMediaLink>
                                  </li>
                                  <li >
                                    <SocialMediaLink color="blue" bgColor="lightblue" href="#" className=" btn">
                                      <LinkedinIcon className="fa fa-linkedin-square " ></LinkedinIcon><LinkedinLinkContent >Signin with Linkedin</LinkedinLinkContent>
                                    </SocialMediaLink >
                                  </li>
                                  <li >
                                    <SocialMediaLink color="black" bgColor="white" border="1px solid gray" hoverBgColor="darkgray" href="#" className=" btn">
                                      <i className="fa fa-google "></i> Signin with Google
                                    </SocialMediaLink>
                                  </li>
                                </SocialLinks>
                              </DisplayForLinks>
                            </div>
                        </form>
                    </div>
                </div>
            </Content>
    </div>
  )
}

export default Signin;