import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div class="container">
        <h4>Contact Us Form</h4>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xzbjwkae"
          method="POST"
        >
          <div class="form-group">
            <label>Name</label>
            <input
              class="form-control"
              placeholder="Enter your name"
              type="text"
              name="name"
            />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              class="form-control"
              placeholder="Enter email"
              type="email"
              name="email"
            />
          </div>

          <div class="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="3"
              cols="30"
              class="form-control"
              placeholder="Enter message"
            ></textarea>
          </div>

          {status === "SUCCESS" ? (
            <h5>Thanks!</h5>
          ) : (
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
