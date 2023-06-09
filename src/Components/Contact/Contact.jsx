import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", name, email, phone, message })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form" netlify>
            <div className="input-group">
                <label htmlFor="name" className="sr-only">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="email" className="sr-only">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="phone" className="sr-only">
                    Phone:
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="message" className="sr-only">
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Your message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
                Send Message
            </button>
        </form>
    );
};

export default Contact;
