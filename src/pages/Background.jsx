import React from "react";
import student from "../assets/jpg/student.jpg";
import faculty from "../assets/jpg/faculty.jpg";
import circlelogo from "../assets/png/circlelogo.png";

function Background() {
  return (
    <div>
      <section className="main" id="home">
        <h1>PG DISSERTATION HUB</h1>
        <p>
          <b>Innovate, Research, Succeed.</b>
        </p>

        <div className="main_chatbot">
          <div className="circle"> </div>
          <div className="chatbot">
            <a href="/">
              <img src={circlelogo} alt="" />
            </a>
          </div>
        </div>

        {/* Modal */}
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="btn1">
              <a href="/">
                <img src={student} alt="" />
                <button id="student_login" className="hide-button">
                  Student Login
                </button>
              </a>
            </div>
            <div className="btn2">
              <a href="/">
                <img src={faculty} alt="" />
                <button id="mentor_login" className="hide-button">
                  Faculty Login
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Background;
