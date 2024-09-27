import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import advanceLogo from "../assets/png/advance_logo.png";
import user from "../assets/png/profile.png";
import student from "../assets/jpg/student.jpg";
import student1 from "../assets/png/student1.png";

function FacultyDashboard() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dissertationTitle, setDissertationTitle] = useState(
    "Dissertation Title(N/A)"
  );
  const [guideName, setGuideName] = useState("Guide Name(N/A)");
  const [status, setStatus] = useState("Status(Pending)");

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

  useEffect(() => {
    setTimeout(() => {
      setDissertationTitle("New Dissertation Title");
      setGuideName("New Guide Name");
      setStatus("New Status");
    }, 3000);
  }, []);

  // Your JavaScript code
  useEffect(() => {
    $(".hamburger").click(function () {
      $(".left_sidebar").css({
        transform: "translateX(0)",
      });
    });
    $(".student").click(function () {
      $(".right_sidebar").css({
        transform: "translateX(0)",
      });
    });

    $(".close_btn").click(function () {
      $(".right_sidebar").css({
        transform: "translateX(150%)",
      });
    });

    $(".close_hamburger_btn").click(function () {
      $(".left_sidebar").css({
        transform: "translateX(-150%)",
      });
    });

    function darkMode() {
      $("body").toggleClass("dark-mode");
      $(".table tr:nth-child(even)").css({
        color: "#000",
      });
      $(".table tr:nth-child(4)").css({
        "background-color": "#5bb9c0",
        color: "#fff",
      });

      $(".main_content .main_navbar .dark_mode_icon .bx-sun").click(
        function () {
          $(this).css("display", "none");
          $(".main_content .main_navbar .dark_mode_icon .bx-moon").css(
            "display",
            "block"
          );
        }
      );

      $(".main_content .main_navbar .dark_mode_icon .bx-moon").click(
        function () {
          $(this).css("display", "none");
          $(".main_content .main_navbar .dark_mode_icon .bx-sun").css(
            "display",
            "block"
          );
        }
      );
    }

    // Call the darkMode function
    darkMode();
  }, []);

  return (
    <div>
      <header
        className={`header ${isScrolled ? "glass-effect" : "normal"}`}
        id="header"
      >
        <div className="logo">
          <Link to="home" smooth={true} duration={500} className="nav-link">
            <img src={advanceLogo} alt="main_logo" />
          </Link>
        </div>

        <div className="menu-bar">
          <ul>
            <li>
              <Link to="#">Dashboard</Link>
            </li>
            <li>
              <Link to="/faculty-dashboard/request" className="nav-link">
                Request
              </Link>
            </li>
            <li>
              <Link
                to="#"
                smooth={true}
                duration={500}
                offset={-100}
                className="nav-link"
              >
                Communication
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile-button">
          <img src={user} alt="Profile" />
        </div>
      </header>
      <section className="section1">
        <div className="container ">
          <div className="left_sidebar">
            <div className="close_hamburger_btn">
              <i className="bx bx-x-circle" />
            </div>
            <div className="logo ">
              <h2 onclick="myFunction()">Students</h2>
            </div>
            <div className="menu_items ">
              <div className="menu_item ">
                <i className="bx bxs-dashboard" />
                <p>Dashboard</p>
              </div>
              <div className="menu_item ">
                <i className="bx bx-message-rounded-dots" />
                <p>Messenger</p>
                <i className="fa-regular fa-circle-2 " />
              </div>
              <div className="menu_item ">
                <i className="bx bx-calendar" />
                <p>Calender</p>
              </div>
              <div className="menu_item ">
                <i className="bx bx-file-blank" />
                <p>Database</p>
              </div>
              <div className="menu_item ">
                <i className="bx bx-signal-4" />
                <p>Attendance</p>
              </div>
              <div className="menu_item ">
                <i className="bx bx-cog" />
                <p>Submissions</p>
              </div>
            </div>
          </div>
          <div className="main_content">
            <div className="left_right_sidebar_opener">
              <div className="hamburger">
                <i className="bx bx-menu" />
              </div>
              <div className="student">
                <div className="profile_img">
                  <img
                    src="https://i.postimg.cc/Sxb6gssQ/img-1.jpg"
                    alt="profile img"
                  />
                </div>
                <div className="profile_name">
                  <p>Kery Roy</p>
                </div>
              </div>
            </div>
            <div className="main_navbar">
              <div className="search_box">
                <i className="bx bx-search-alt-2" />{" "}
                <input type="text " placeholder="Search" />
              </div>
              <div className="dark_mode_icon" onclick="darkMode()">
                <i className="bx bx-moon" />
                <i className="bx bx-sun" />
              </div>
            </div>
            <div className="menu_item_name_and_filter ">
              <div className="menu_item_name">
                <h2>Database</h2>
              </div>
              <div className="filter_and_sort">
                <div className="sort sort_and_filter">
                  <p>Sort</p>
                  <i className="bx bx-sort-down" />
                </div>
                <div className="filter sort_and_filter">
                  <p>Filter</p>
                  <i className="bx bx-filter" />
                </div>
              </div>
            </div>
            <div className="tabs">
              <div className="tab_name">
                <p>Batch1</p>
                <p>Batch2</p>
                <p>Batch3</p>
              </div>
              <div className="three_dots">
                <i className="bx bx-dots-vertical-rounded" />
              </div>
            </div>
            <div className="table">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Topic</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img
                        src="https://i.postimg.cc/BvPJ7FHN/img1.jpg"
                        alt="img"
                      />{" "}
                      Gururaj
                    </td>
                    <td>001</td>
                    <td>AI</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>gururaj@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img
                        src="https://i.postimg.cc/c1bW8qWT/1656339664529.jpg"
                        alt="img"
                      />{" "}
                      Sanket
                    </td>
                    <td>012</td>
                    <td>Cloud</td>
                    <td>20</td>
                    <td>Male</td>
                    <td>sanket@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img src={student1} alt="img" /> Nijal
                    </td>
                    <td>003</td>
                    <td>Data Science</td>
                    <td>19</td>
                    <td>male</td>
                    <td>nijal@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img
                        src="https://i.postimg.cc/c1k4jFvZ/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                        alt="img"
                      />{" "}
                      Json
                    </td>
                    <td>009</td>
                    <td>Data Mining</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>json@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img
                        src="https://i.postimg.cc/qBbpBPZB/img-2.jpg"
                        alt="img"
                      />{" "}
                      Rose
                    </td>
                    <td>021</td>
                    <td>AI</td>
                    <td>19</td>
                    <td>Female</td>
                    <td>Rose@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img
                        src="https://i.postimg.cc/SRkqKt5t/img2.jpg"
                        alt="img"
                      />{" "}
                      Lily
                    </td>
                    <td>971</td>
                    <td>AI</td>
                    <td>21</td>
                    <td>Female</td>
                    <td>Lily@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img
                        src="https://i.postimg.cc/9M3C6fB2/img3.jpg"
                        alt="img"
                      />{" "}
                      Tushar
                    </td>
                    <td>311</td>
                    <td>AI</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>Tushar@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img
                        src="https://i.postimg.cc/xCR77pg2/dahiana-waszaj-XQWfro4LrVs-unsplash.jpg"
                        alt="img"
                      />
                      Aliana
                    </td>
                    <td>4011</td>
                    <td>ML</td>
                    <td>19</td>
                    <td>Female</td>
                    <td>Aliana@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name">
                      <img
                        src="https://i.postimg.cc/9MXPK7RT/news2.jpg"
                        alt="img"
                      />
                      Alex
                    </td>
                    <td>0011</td>
                    <td>Cloud</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>Alex@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name ">
                      <img
                        src=" https://i.postimg.cc/qqwr6xHB/img4.jpg "
                        alt="img "
                      />
                      Sieena
                    </td>
                    <td>0041</td>
                    <td>Medical</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>Sieena@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name ">
                      <img
                        src="https://i.postimg.cc/528xwmBq/women_trending_1(1).jpg "
                        alt="img "
                      />
                      Devid
                    </td>
                    <td>0311</td>
                    <td>Data Science</td>
                    <td>20</td>
                    <td>Male</td>
                    <td>Devid@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name ">
                      <img
                        src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg "
                        alt="img "
                      />
                      Josh
                    </td>
                    <td>0041</td>
                    <td>Data Mining</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>Josh@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profile_name ">
                      <img
                        src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg "
                        alt="img "
                      />
                      John
                    </td>
                    <td>0013</td>
                    <td>Space Technology</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>John@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="right_sidebar ">
            <div className="notification_and_name ">
              <div className="close_btn ">
                <i className="bx bx-x-circle" />
              </div>
              <div className="bell ">
                <i className="bx bx-bell" />
                <span />
              </div>
              <img src={student} alt="profile " />
              <p>Vikas Patel</p>
              <i className="bx bx-chevron-down" />
            </div>
            <div className="profile ">
              <div className="img ">
                <img src={student1} alt="studentImg " />
              </div>
              <div className="name_and_class ">
                <p>Nijal Patel</p>
                <span>Data Science Student</span>
              </div>
              <div className="contact_info ">
                <i className="bx bx-message-rounded-dots" />
                <i className="bx bx-phone-call" />
                <i className="bx bx-envelope" />
              </div>
              <div className="about ">
                <h4>About</h4>
                <p>
                  As a Data Science student. Studied at ABC college of Computer
                  studies. I really enjoy solving problems as well as making
                  things pretty and easy to use. I can't stop learning new
                  things; the more, the better.
                </p>
              </div>
              <div className="other_info ">
                <div className="age ">
                  <h4>Age</h4>
                  <p>18</p>
                </div>
                <div className="gender ">
                  <h4>Gender</h4>
                  <p>male</p>
                </div>
                <div className="dob ">
                  <h4>DOB</h4>
                  <p>12/11/2003</p>
                </div>
                <div className="address ">
                  <h4>Address</h4>
                  <p>India</p>
                </div>
              </div>
              <div className="student_from_same_class ">
                <div className="student_same_class_heading ">
                  <h4>Student from the same class</h4>
                </div>
                <div className="student_same_class_img ">
                  <img
                    src="https://i.postimg.cc/qBbpBPZB/img-2.jpg "
                    alt="img "
                  />
                  <img
                    src="https://i.postimg.cc/BvPJ7FHN/img1.jpg "
                    alt="img "
                  />
                  <img
                    src="https://i.postimg.cc/SRkqKt5t/img2.jpg "
                    alt="img "
                  />
                  <img
                    src="https://i.postimg.cc/xCR77pg2/dahiana-waszaj-XQWfro4LrVs-unsplash.jpg "
                    alt="img "
                  />
                  <img
                    src="https://i.postimg.cc/9MXPK7RT/news2.jpg "
                    alt="img "
                  />
                  <span>+12 More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FacultyDashboard;
