import React,{useState} from 'react';
import undraw_login from '../components/assets/images/undraw_Login.svg';
import  '../components/assets/css/Authenticate.css';

const Authenticate = () => {
    //const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:'',
        phoneNumber: ''
    });

    const {name, email, password,phoneNumber} = formData;

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
      <h1 className="text-center">Authenticate</h1>
      <div
                className="container-fluid rounded shadow-lg py-4 px-3 mt-5"
                style={{width: "70%"}}
            >
                <div className="row mt-2">
                    <div className="col-md-6">
                        <img
                            src={undraw_login}
                            alt="undraw_login"
                            className="float-left"
                            style={{width: "100%", height: "100%"}}
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
                            <div className="form-group mb-4">
                                <label className="h5 contact-label">Phone-Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={e => onChange(e)}
                                    placeholder="Eg +91 9999 9999 99"
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
                              <button
                                type="submit"
                                className="btn btn-outline-success rounded-pill shadow"
                                style={{width: "30%"}}
                              >
                                SignIn
                              </button>
                              <button
                                type="submit"
                                className="btn btn-outline-danger rounded-pill shadow"
                                style={{width: "50%",marginLeft: "5px"}}
                              >
                                Forgot your password?
                              </button>
                            </div>
                            <div className="form-group text-center">
                              <label className="h5 contact-label">New to Social-Scheduler ? ,then Register here</label>
                              <button
                                type="submit"
                                className="btn btn-outline-success rounded-pill shadow"
                                style={{width: "30%"}}
                              >
                                SignUp
                              </button>
                            </div>
                            {/* social media links for login */}
                            <div>
                              <div style={{margin:"40px"}}>
                                <h2><span>OR</span></h2>
                              </div>
                              <div className="col">
                                <ul style={{display:"inline",listStyle:"none"} }>
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
                                    <a href="#" className="linkedin btn" style={{justifyContent:"space-around"}}>
                                      <i className="fa fa-linkedin-square " style={{fontSize:"32px",color:"blue",float:"left",backgroundColor:"white"}}></i><p style={{fontSize:18,textAlign:"center",textAlign:"center"}}>Login with Linkedin</p>
                                    </a>
                                  </li>
                                  <li className="google-li">
                                    <a href="#" className="google btn">
                                      <i className="fa fa-google "></i> Login with Google
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Authenticate;