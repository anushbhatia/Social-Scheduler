import React,{ useState } from 'react';

const UserRegister = () =>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const onSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(name +" "+ email);
    //Backend Code
    setName("");
    setEmail("");
    setMessage("");


  }

  return(
    <div>
      <h1 className="text-center"> User Registration Form</h1>
      <div
        className="container-fluid rounded shadow-lg py-4 px-3 mt-5"
        style={{ width: "70%" }}
      >
          <form
            className="needs-validation"
            onSubmit={onSubmitHandler} >
            <div className="form-group mb-4">
              <label className="h5 text-dark contact-label">Name</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(event)=>{setName(event.target.value)}} />
            </div>

            <div className="form-group mb-4">
              <label className="h5 text-dark contact-label">Email</label>
              <input
                className="form-control"
                required
                type="text"
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}} />
            </div>

            <div className="form-group mb-4">
              <label className="h5 text-dark contact-label">Message</label>
              <input
                className="form-control"
                required
                type="textarea"
                value={message}
                onChange={(event)=>{setMessage(event.target.value)}} />
            </div>

            <div className="form-group text-center">
              {status === "SUCCESS" ? (
                <h5 className="text-success">
                  Thanks! Your response has been submitted
                </h5>
              ) : (
                <button
                  type="submit"
                  className="btn btn-outline-success rounded-pill shadow"
                  style={{ width: "25%" }}
                >
                  Submit!
                </button>
              )}
              {status === "ERROR" && (
                <h5 className="text-danger">Oops! There was an error.</h5>
              )}
            </div>
          </form>
      </div>
    </div>
  );
}

export default UserRegister;
