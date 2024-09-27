import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function StudentLogin() {
  const [show, setShow] = useState(false);

  // JSX for your component
  const navigate = useNavigate();

  const handleStudentDashboard = () => {
    // Navigate to student login page using useNavigate
    navigate("/student-dashboard");
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sloginsection">
      <section>
        <div className="form-box">
          <div className="form-value">
            <form>
              <h2>Student Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline" />
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline" />
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="forget">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
              <button onClick={handleStudentDashboard}>Log In</button>
              <div className="register">
                <p>
                  Don't have an account?{" "}
                  <button className="button-16 button" onClick={handleShow}>
                    Register Now
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Modal size="lg" className="smodal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registration Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container11">
            <label htmlFor="fname">
              <b>FirstName</b>
            </label>
            <input
              type="text"
              placeholder="Enter your firstname"
              name="fname"
              required=""
            />
            <label htmlFor="lname">
              <b>LastName</b>
            </label>
            <input
              type="text"
              placeholder="Enter your lastname"
              name="lname"
              required=""
            />
            <label htmlFor="dateofbirth">
              <b>Date-of-Birth</b>
            </label>
            <input type="date" name="dateofbirth" required="" />
            <label htmlFor="lname">
              <b>Email Id</b>
            </label>
            <input
              type="email"
              placeholder="abc123@gmail.com"
              name="email"
              required=""
            />
            <label htmlFor="psw11">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required=""
            />
            <label htmlFor="phone">
              <b>Phone</b>
            </label>
            <input
              type="number"
              placeholder="Enter phone number"
              name="phone"
              required=""
            />
            <label htmlFor="address">
              <b>Address</b>
            </label>
            <input
              type="text"
              placeholder="Enter your current address"
              name="address"
              required=""
            />
            <label htmlFor="collage">
              <b>Collage</b>
            </label>
            <input
              type="text"
              placeholder="Enter your collagename"
              name="collage"
              required=""
            />
            <label htmlFor="department">
              <b>Department</b>
            </label>
            <input
              type="text"
              placeholder="Enter your department"
              name="department"
              required=""
            />
            <label htmlFor="enroll">
              <b>Enrollment Number</b>
            </label>
            <input
              type="text"
              placeholder="Enter your enrollment number "
              name="enroll"
              required=""
            />
            <label htmlFor="gradu_year">
              <b>ExpectedGraduationYear</b>
            </label>
            <input
              type="number"
              placeholder="Enter your graduation year"
              name="gradu_year"
              required=""
            />
            <button className="button-16">Submit</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StudentLogin;
