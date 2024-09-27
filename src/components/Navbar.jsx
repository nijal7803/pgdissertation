import React, { useState, useEffect } from "react";
import advanceLogo from "../assets/png/advance_logo.png";
import ayushLogo from "../assets/png/ayushlogo.png";
import { Link as ScrollLink } from "react-scroll";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleStudentLogin = () => {
    // Navigate to student login page using useNavigate
    navigate("/student-login");
    handleClose(); // Close the modal
  };

  const handleFacultyLogin = () => {
    // Navigate to faculty login page using useNavigate
    navigate("/faculty-login");
    handleClose(); // Close the modal
  };

  return (
    <header
      className={`header ${isScrolled ? "glass-effect" : "normal"}`}
      id="header"
    >
      <div className="logo">
        <ScrollLink to="home" smooth={true} duration={500} className="nav-link">
          <img src={advanceLogo} alt="main_logo" />
        </ScrollLink>
      </div>

      <div className="menu-bar">
        <ul>
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="aboutUs"
              smooth={true}
              duration={500}
              spy={true}
              offset={-120}
              className="nav-link"
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="reviews"
              smooth={true}
              duration={500}
              offset={-120}
              className="nav-link"
            >
              Reviews
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="nav-link"
            >
              Contact Us
            </ScrollLink>
          </li>
        </ul>
      </div>

      <div className="login button">
        <div className="registration">
          <button
            className="button-17 button"
            onClick={handleShow} // Show the registration modal on click
          >
            REGISTER
          </button>
        </div>
        <img src={ayushLogo} alt="ayushlogo" />
      </div>

      {/* Registration Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button className="button-16 button" onClick={handleStudentLogin}>
            Student Login
          </button>
          <button className="button-16 button" onClick={handleFacultyLogin}>
            Faculty Login
          </button>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Navbar;
