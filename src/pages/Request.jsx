import React, { useEffect, useState } from "react";
import student1 from "../assets/png/student1.png";

function Request() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch PG dissertation requests (update the URL)
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        const requestList = data.results.map((request) => ({
          name: `${request.name.first} ${request.name.last}`,
          username: `@${request.login.username}`,
          accepted: false,
        }));
        setRequests(requestList);
      });
  }, []);

  const handleAccept = (username) => {
    // Find the request in the list and mark it as accepted
    const updatedRequests = requests.map((request) =>
      request.username === username ? { ...request, accepted: true } : request
    );
    setRequests(updatedRequests);
  };

  const handleReject = (username) => {
    // Find the request in the list and remove it
    const updatedRequests = requests.filter(
      (request) => request.username !== username
    );
    setRequests(updatedRequests);
  };

  return (
    <div>
      <section>
        <div className="reqh">
          <h2>PG Dissertation Requests</h2>
        </div>
      </section>
      <section>
        <div className="request-list">
          {requests.map((request) => (
            <div key={request.username} className="request-box">
              <div
                className="request-profile"
                style={{ backgroundImage: `url(${student1})` }}
              ></div>
              <div className="name-box">{request.name}</div>
              <div className="user-name-box">
                {request.username} has requested your mentorship.
              </div>
              {request.accepted ? (
                <div className="request-response-message">
                  You have accepted the request.
                </div>
              ) : (
                <div className="request-actions">
                  <button
                    className="request-action accept-request"
                    onClick={() => handleAccept(request.username)}
                  >
                    Accept
                  </button>
                  <button
                    className="request-action reject-request"
                    onClick={() => handleReject(request.username)}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Request;
