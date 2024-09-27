import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import guide from "../assets/png/faculty.png";
function Guide() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section className="card-section">
        <div className="text-center mt-3">
          <h1 className="text-capitalize font-weight-bold">
            Select<span className="text-primary"> Dissertation Topic</span>
          </h1>
        </div>
        <Dropdown className="my-4">
          <Dropdown.Toggle variant="primary" size="md" id="dropdown-basic">
            Topic List
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ width: "100%" }}>
            {/* List of topics */}
            <Dropdown.Item href="#/action-1" style={{ textAlign: "center" }}>
              AI ethics
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={{ textAlign: "center" }}>
              Medical
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" style={{ textAlign: "center" }}>
              Renewable energy
            </Dropdown.Item>
            <Dropdown.Item href="#/action-4" style={{ textAlign: "center" }}>
              Disease treatment
            </Dropdown.Item>
            <Dropdown.Item href="#/action-5" style={{ textAlign: "center" }}>
              Space exploration
            </Dropdown.Item>
            <Dropdown.Item href="#/action-6" style={{ textAlign: "center" }}>
              Social media and mental health
            </Dropdown.Item>
            <Dropdown.Item href="#/action-7" style={{ textAlign: "center" }}>
              Inequality and political participation
            </Dropdown.Item>
            <Dropdown.Item href="#/action-8" style={{ textAlign: "center" }}>
              Radicalization and terrorism
            </Dropdown.Item>
            <Dropdown.Item href="#/action-9" style={{ textAlign: "center" }}>
              Gender and race in criminal justice
            </Dropdown.Item>
            <Dropdown.Item href="#/action-10" style={{ textAlign: "center" }}>
              Immigration and education/healthcare
            </Dropdown.Item>
            <Dropdown.Item href="#/action-11" style={{ textAlign: "center" }}>
              Representation in literature/film
            </Dropdown.Item>
            <Dropdown.Item href="#/action-12" style={{ textAlign: "center" }}>
              Quantum Computing
            </Dropdown.Item>
            <Dropdown.Item href="#/action-13" style={{ textAlign: "center" }}>
              Metaverse
            </Dropdown.Item>
            <Dropdown.Item href="#/action-14" style={{ textAlign: "center" }}>
              cloud computing
            </Dropdown.Item>
            <Dropdown.Item href="#/action-15" style={{ textAlign: "center" }}>
              Phylosophy of Technology
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="faculty-card">
          <div className="card" style={{ width: "18rem" }}>
            <img className="fcardimg" src={guide} alt="" />
            <div className="card-body">
              <h5 className="card-title">Mentor 1</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">mentor_1@ldrp.ac.in</li>
              <li className="list-group-item">Domain: Machine Learning</li>
              <li className="list-group-item">Experience : 9 years</li>
            </ul>
            <button className="button-19" onClick={handleShow}>
              Choose Mentor
            </button>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img className="fcardimg" src={guide} alt="Mentor Image" />
            <div className="card-body">
              <h5 className="card-title">Mentor 2</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">mentor_2@ldrp.ac.in</li>
              <li className="list-group-item">Domain: Deep Learning</li>
              <li className="list-group-item">Experience : 7 years</li>
            </ul>
            <button className="button-19" onClick={handleShow}>
              Choose Mentor
            </button>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img className="fcardimg" src={guide} alt="Mentor Image" />
            <div className="card-body">
              <h5 className="card-title">Mentor 3</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">mentor_3@ldrp.ac.in</li>
              <li className="list-group-item">Domain: Cloud Computing</li>
              <li className="list-group-item">Experience : 11 years</li>
            </ul>
            <button className="button-19" onClick={handleShow}>
              Choose Mentor
            </button>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img className="fcardimg" src={guide} alt="Mentor Image" />
            <div className="card-body">
              <h5 className="card-title">Mentor 4</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">mentor_4@ldrp.ac.in</li>
              <li className="list-group-item">Domain: Data Mining</li>
              <li className="list-group-item">Experience : 13 years</li>
            </ul>
            <button className="button-19" onClick={handleShow}>
              Choose Mentor
            </button>
          </div>
        </div>
      </section>
      <Modal size="lg" className="smodal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Proposal Submission
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container13">
            <label htmlFor="uname">
              <b>Name of </b>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="student name"
              required=""
            />
            <label htmlFor="psw">
              <b>Dissertation Topic </b>
            </label>
            <input
              type="text"
              placeholder="Enter Your Topic"
              name="psw"
              required=""
            />
            <label htmlFor="psw">
              <b>Abstract</b>
            </label>
            <input
              type="text"
              placeholder="Enter abstract"
              name="psw"
              required=""
            />
            <label htmlFor="psw">
              <b> Objectives </b>{" "}
            </label>
            <input
              type="text"
              placeholder="Enter objectives"
              name="psw"
              required=""
            />
            <label htmlFor="psw">
              <b>Methodology</b>
            </label>
            <input
              type="text"
              placeholder="Enter methodology description"
              name="psw"
              required=""
            />
            <label htmlFor="psw">
              <b>Significance</b>
            </label>
            <input
              type="text"
              placeholder="Significance of dissertation"
              name="psw"
              required=""
            />
            <button className="button-20" type="submit">
              Submit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Guide;
