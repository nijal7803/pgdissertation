import React from "react";

const Contact = () => {
  return (
    <div className="formbold-main-wrapper contact">
      <div className="formbold-form-wrapper">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="text-center mb-5">
            <h1 className="text-capitalize font-weight-bold">
              CONTACT<span className="text-primary">US</span>
            </h1>
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="name" className="formbold-form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="email" className="formbold-form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="subject" className="formbold-form-label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="message" className="formbold-form-label">
              Message
            </label>
            <textarea
              rows="6"
              name="message"
              id="message"
              placeholder="Type your message"
              className="formbold-form-input"
            ></textarea>
          </div>

          <div>
            <button className="formbold-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
