import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import HCMore from "highcharts/highcharts-more";
import advanceLogo from "../assets/png/advance_logo.png";
import user from "../assets/png/profile.png";

// Initialize Highcharts More module
HCMore(Highcharts);

function StudentDashboard() {
  useEffect(() => {
    // Configuration for the Highcharts chart
    const chartOptions = {
      title: {
        text: "Time Spent on Research",
        align: "left",
      },
      colors: [
        "#BCB4FF",
        "#9381FF",
        "#6C50FA",
        "#673ED4",
        "#622BAE",
        "#7B21C5",
        "#9316DB",
        "#B74CE3",
        "#C169F0",
        "#DC86F5",
        "#F6A2FA",
        "#FAC5FC",
      ],
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      // Graph Data
      series: [
        {
          type: "column",
          name: "studied(In Hrs)",
          borderRadius: 5,
          colorByPoint: true,
          data: [120, 90, 132, 40, 89, 122, 35, 18, 76, 34, 67, 90],
          showInLegend: false,
        },
      ],
      yAxis: {
        title: false,
      },
    };

    // Create the Highcharts chart
    const chart = new Highcharts.Chart("chart_container", chartOptions);

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to ensure it runs only once

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
              <Link to="#" smooth={true} duration={500} className="nav-link">
                Dashbord
              </Link>
            </li>
            <li>
              <Link to="/student-dashboard/guide" className="nav-link">
                guide
              </Link>
            </li>
            <li>
              <Link
                to="#"
                smooth={true}
                duration={500}
                offset={-120}
                className="nav-link"
              >
                Dissertation submission
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
      <section className="section1 section9">
        <div className="carddashinfo">
          <div className="card-details">
            <p className="text-title">Dissertation Information</p>
            <p className="text-body">{dissertationTitle}</p>
            <p className="text-body">{guideName}</p>
            <p className="text-body">{status}</p>
          </div>
        </div>
      </section>

      {/* =================================================DashBoard================================================ */}

      <section className="section9">
        <div className="cardgrid">
          <div className="cardgrid1">
            <div className="card1">
              <p></p>
            </div>
            <div className="card2">
              <div className="mycontainer">
                <div className="block">
                  <div className="number">104</div>
                  <div className="string">Days</div>
                </div>
                <div className="block">
                  <div className="number">6</div>
                  <div className="string">CH Completed</div>
                </div>
                <div className="block">
                  <div className="number">9</div>
                  <div className="string">Task Remaining</div>
                </div>
                <div className="block">
                  <div className="number">391</div>
                  <div className="string">Days Left</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardgrid2">
            <div className="card3">
              <figure className="highcharts-figure">
                <div
                  id="chart_container"
                  style={{ height: "250px", background: "transparent" }}
                />
              </figure>
            </div>
            <div className="card4">
              <div
                id="twmayakret"
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  width: "auto",
                  height: "auto",
                }}
              >
                <table className="gt_table">
                  <thead className="gt_col_headings">
                    <tr>
                      <th
                        className="gt_col_heading gt_columns_bottom_border gt_left"
                        rowSpan={1}
                        colSpan={1}
                      >
                        track Record
                      </th>
                      <th
                        className="gt_col_heading gt_columns_bottom_border gt_right"
                        rowSpan={1}
                        colSpan={1}
                      >
                       Guid Approval
                      </th>
                      <th
                        className="gt_col_heading gt_columns_bottom_border gt_right"
                        rowSpan={1}
                        colSpan={1}
                      >
                       Date
                      </th>
                      <th
                        className="gt_col_heading gt_columns_bottom_border gt_right"
                        rowSpan={1}
                        colSpan={1}
                      >
                        Marks
                      </th>
                      <th
                        className="gt_col_heading gt_columns_bottom_border gt_right"
                        rowSpan={1}
                        colSpan={1}
                      >
                        Improvment
                      </th>
                      <th
                        className="gt_col_heading gt_columns_bottom_border gt_right"
                        rowSpan={1}
                        colSpan={1}
                      >
                        valence
                      </th>
                    </tr>
                  </thead>
                  <tbody className="gt_table_body">
                    <tr>
                      <td className="gt_row gt_left">track2</td>
                      <td className="gt_row gt_left">APPROVED</td>
                      <td className="gt_row gt_right">21/9/23</td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#622BAE", color: "#FFFFFF" }}
                      >
                        99
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#622BAE", color: "#FFFFFF" }}
                      >
                        0.959
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#E5E1FF", color: "#000000" }}
                      >
                        0.142
                      </td>
                    </tr>
                    <tr>
                      <td className="gt_row gt_left">track4</td>
                      <td className="gt_row gt_left">APPROVED</td>
                      <td className="gt_row gt_right">25/9/23</td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#702BC3", color: "#FFFFFF" }}
                      >
                        98
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#8069FD", color: "#ddd" }}
                      >
                        0.169
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#CCC2FF", color: "#000000" }}
                      >
                        0.428
                      </td>
                    </tr>
                    <tr>
                      <td className="gt_row gt_left">track5</td>
                      <td className="gt_row gt_left">APPROVED</td>
                      <td className="gt_row gt_right">11/9/23</td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#753DE9", color: "#fafafa" }}
                      >
                        95
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#CCC2FF", color: "#000000" }}
                      >
                        0.1170
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#A393FF", color: "#000000" }}
                      >
                        0.625
                      </td>
                    </tr>
                    <tr>
                      <td className="gt_row gt_left">track6</td>
                      <td className="gt_row gt_left">APPROVED</td>
                      <td className="gt_row gt_right">19/9/23</td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#6C50FA", color: "#f0f0f0" }}
                      >
                        94
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#A393FF", color: "#000000" }}
                      >
                        0.1430
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#8069FD", color: "#ddd" }}
                      >
                        0.242
                      </td>
                    </tr>
                    <tr>
                      <td className="gt_row gt_left">track7</td>
                      <td className="gt_row gt_left">APPROVED</td>
                      <td className="gt_row gt_right">02/10/23</td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#8069FD", color: "#ddd" }}
                      >
                        91
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#8A75FE", color: "#000000" }}
                      >
                        0.1485
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#6C50FA", color: "#fafafa" }}
                      >
                        0.836
                      </td>
                    </tr>
                    <tr>
                      <td className="gt_row gt_left">track8</td>
                      <td className="gt_row gt_left">APPROVED</td>
                      <td className="gt_row gt_right">15/10/23</td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#A393FF", color: "#000000" }}
                      >
                        90
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#702BC3", color: "#FFFFFF" }}
                      >
                        0.5190
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#753DE9", color: "#fafafa" }}
                      >
                        0.536
                      </td>
                    </tr>
                    <tr>
                      <td className="gt_row gt_left">track9</td>
                      <td className="gt_row gt_left">APPROVED</td>
                      <td className="gt_row gt_right">19/10/23</td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#CCC2FF", color: "#000000" }}
                      >
                        88
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#6C50FA", color: "#fafafa" }}
                      >
                        0.1800
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#702BC3", color: "#FFFFFF" }}
                      >
                        0.124
                      </td>
                    </tr>
                    <tr>
                      <td className="gt_row gt_left">track10</td>
                      <td className="gt_row gt_left">APPROVED</td>
                      <td className="gt_row gt_right">Due</td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#E5E1FF", color: "#000000" }}
                      >
                        -
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#753DE9", color: "#fafafa" }}
                      >
                      -
                      </td>
                      <td
                        className="gt_row gt_right"
                        style={{ backgroundColor: "#622BAE", color: "#FFFFFF" }}
                      >
                        -
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="cardgrid3">
            {/* <div className="card5 wtab">
              <div className="card-body five">
                <small className="text-muted">Top Artist Genres</small>
              </div>
              <figure className="highcharts-figure">
                <div
                  id="mycontainer2"
                  style={{ height: "250px", background: "transparent" }}
                />
              </figure>
            </div> */}
            <div className="card6">
              <p><strong>Notice :</strong>
               your session one of submiting the introduction 1 is ended so please submit your work as you are late you will be given less points <br></br>
               Thank you .
              </p>
              <ul>
                <li>
                Your attendance and participation are highly encouraged. Please make sure to be punctual and bring any necessary materials or documents.

If you have any questions or require further information, please don't hesitate to contact [Insert Contact Information].

Thank you for your attention.


                </li>
                <li>
                  implement a Python script that contains several functions for
                  cleaning song lyrics and determining the sentiment of the
                  lyrics.
                </li>
              </ul>
              <p />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;
