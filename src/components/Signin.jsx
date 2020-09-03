import React,{useState} from 'react';
import undraw_login from '../components/assets/images/undraw_Login.svg';
import styled from 'styled-components';

const Content = styled.div`
  width: 70%;
`;

const Button = styled.button`
  width:${props => props.width};
  margin-left:${props=>props.marginLeft};
`;

const AuthLinkWrapper = styled.div`
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

const DisplayForLinks = styled.div`
  display: inline;
  list-style:none;
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

const AuthLink = styled.a`
  background-color:${props => props.bgColor} ;
  color: ${props => props.color};
  &:hover{
    background-color:${props => props.hoverBgColor};
    color:${props => props.hoverColor};
  }
  i{
    color:${props => props.IconColor};
    padding-right:${props => props.paddingRight};
    background-color:${props => props.IconBgColor};
  }
  i &:hover{ 
    color:${props => props.hoverIconColor};
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
                              <Button
                                type="submit"
                                className="btn btn-outline-success rounded-pill shadow"
                                width="30%"
                              >
                                SignIn
                              </Button>
                              <Button
                                type="submit"
                                className="btn btn-outline-danger rounded-pill shadow"
                                width="60%"
                                marginLeft="5px"
                              >
                                Forgot your password?
                              </Button>
                            </div>
                            <div className="form-group text-center">
                              <label className="h5 contact-label">New to Social-Scheduler ? ,then Register here</label>
                              <Button
                                type="submit"
                                className="btn btn-outline-success rounded-pill shadow"
                                width="30%"
                              >
                                SignUp
                              </Button>
                            </div>
                            {/* social media links for login */}
                            <div>
                              <AuthLinkWrapper >
                                <h2><span>OR</span></h2>
                              </AuthLinkWrapper>
                              <DisplayForLinks >
                                  <li>
                                    <AuthLink  
                                      color ="white" bgColor="#3B5998" 
                                      href="#" hoverColor="white"
                                      hoverBgColor="#203797" className="btn"
                                      paddingRight="5px"
                                    >
                                      <i className="fa fa-facebook fa-fw"></i>Signin with Facebook
                                    </AuthLink>
                                  </li>
                                  <li >
                                    <AuthLink 
                                      bgColor="#2D2C2C" color="white" 
                                      hoverBgColor="#4A4A4C" href="#" 
                                      hoverColor="white"    className=" btn"
                                      paddingRight="5px"
                                    >
                                      <i className="fa fa-github "></i>Signin with Github
                                    </AuthLink>
                                  </li>
                                  <li >
                                    <AuthLink 
                                      color="white" bgColor="#0e76a8" 
                                      href="#" className=" btn" 
                                      IconColor="white" paddingRight="5px"
                                      IconBgColor="#0e76a8"
                                      hoverColor="white" hoverBgColor="#3168E5"
                                    >
                                      <i className="fa fa-linkedin"></i>Signin with Linkedin
                                    </AuthLink >
                                  </li>
                                  <li >
                                    <AuthLink 
                                      color="white" bgColor="#DE3D1F"
                                      hoverBgColor="#AB2B11"  href="#" 
                                      className=" btn"  paddingRight="5px"
                                      IconColor="white" hoverColor="white"
                                    >
                                      <i className="fa fa-google "></i>Signin with Google
                                    </AuthLink>
                                  </li>
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