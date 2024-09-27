import React from "react";
import { useNavigate } from "react-router-dom";

function FacultyLogin() {
  const navigate = useNavigate();

  const handleFacultyDashboard = () => {
    navigate("/faculty-dashboard");
  };
  return (
    <div className="fsection">
      <section>
        <div className="form-box">
          <div className="form-value">
            <form>
              <h2>Faculty Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline" />
                <input type="email" required="" />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline" />
                <input type="password" required="" />
                <label>Password</label>
              </div>
              <div className="radiologin">
                <input
                  type="radio"
                  id="faculty"
                  name="fav_language"
                  defaultValue="Faculty"
                />
                <label htmlFor="html">College Admin</label>
                <br />
                <input
                  type="radio"
                  id="Admin"
                  name="fav_language"
                  defaultValue="Admin"
                />
                <label htmlFor="css">Faculty</label>
                <br />
              </div>
              <button onClick={handleFacultyDashboard}>Log In</button>
            </form>
          </div>
        </div>
      </section>
      {/* ion-icon installation: Start */}
      {/*ion-icon installation: End*/}
    </div>
  );
}

export default FacultyLogin;
