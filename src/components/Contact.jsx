import React from 'react'
import contact_illustration  from "../contact_illustration.svg";
function Contact() {
    return (
        <>
            <h1 className="text-center">Contact</h1>
            <div className="container rounded shadow-lg py-4 px-3 mt-5">
                <div className="row mt-2">
                    <div className="col-md-6">
                        <img src={contact_illustration} alt="contact_illustration" className="float-left" style={{width: "100%", height: "100%"}} />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="form-group">
                                <label className="h5">Name</label>
                                <input type="name" className="form-control" placeholder="Eg. Harry Singh" />
                            </div>
                            <div class="form-group">
                                <label className="h5">Email</label>
                                <input type="email" className="form-control" placeholder="Eg. example@example.com" />
                            </div>
                            <div class="form-group">
                                <label className="h5">Subject</label>
                                <input type="text" className="form-control" placeholder="Write the subject of the mail here." />
                            </div>
                            <div class="form-group">
                                <label className="h5">Message</label>
                                <textarea type="text" className="form-control" placeholder="Write your message here." style={{minHeight:"20vh"}}>
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-success">Send</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;
