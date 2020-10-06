import React, { useState } from "react";
import axios from "axios";
import contact_illustration from "../contact_illustration.svg";

function Contact() {
	const [status, setStatus] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const { name, email, subject, message } = formData;

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
		ev.preventDefault();
		const config = {
			headers: { Accept: "application/json" },
		};
		const res = await axios.post(
			"https://formspree.io/xzbjwkae",
			formData,
			config
		);
		if (res.status === 200) {
			setFormData({ name: "", message: "", subject: "", email: "" });
			setStatus("SUCCESS");
		} else {
			setStatus("ERROR");
		}
	};

	return (
		<div>
			<h1 className="text-center">Contact</h1>
			<div
				className="container-fluid rounded shadow-lg py-4 px-3 mt-5"
				style={{ width: "70%" }}
			>
				<div className="row mt-2">
					<div className="col-md-6">
						<img
							src={contact_illustration}
							alt="contact_illustration"
							className="float-left"
							style={{ width: "100%", height: "100%" }}
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
									onChange={(e) => onChange(e)}
									placeholder="Eg. Harry Singh"
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
									onChange={(e) => onChange(e)}
									placeholder="Eg. example@example.com"
									required
								/>
							</div>
							<div className="form-group mb-4">
								<label className="h5 contact-label">Subject</label>
								<input
									type="text"
									className="form-control"
									name="subject"
									value={subject}
									onChange={(e) => onChange(e)}
									placeholder="Write the subject of the mail here."
									required
								/>
							</div>
							<div className="form-group mb-4">
								<label className="h5 contact-label">Message</label>
								<textarea
									type="text"
									className="form-control"
									name="message"
									value={message}
									onChange={(e) => onChange(e)}
									placeholder="Write your message here."
									style={{ minHeight: "20vh" }}
									required
								/>
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
										style={{ width: "30%" }}
									>
										Send
									</button>
								)}
								{status === "ERROR" && (
									<h5 className="text-danger">Oops! There was an error.</h5>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
