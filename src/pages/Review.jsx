import React from "react";

const Review = () => {
  return (
    <section id="reviews" className="review-area ptb_100 section9">
      <div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                <i className="far fa-lightbulb text-primary mr-1"></i>
                <span className="text-primary">Students's </span>
                Reviews
              </span>
              <h2 className="text-capitalize">What our students are saying</h2>
              <p className="d-none d-sm-block mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
              <p className="d-block d-sm-none mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 res-margin">
            {/* Single Review */}
            <div className="single-review card">
              {/* Card Top */}
              <div className="card-top p-4">
                <div className="review-icon">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                </div>
                <h4 className="text-primary mt-4 mb-3">
                  Excellent service &amp; support!!
                </h4>
                {/* Review Text */}
                <div className="review-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis nam id facilis, provident doloremque placeat eveniet
                    molestias laboriosam. Optio, esse.
                  </p>
                </div>
                {/* Quotation Icon */}
                <div className="quot-icon">
                  <img className="avatar-md" src="#" alt="" />
                </div>
              </div>
              {/* Reviewer */}
              <div className="reviewer media bg-gray p-4">
                {/* Reviewer Thumb */}
                <div className="reviewer-thumb">
                  <img
                    className="avatar-lg radius-100"
                    src="assets/img/avatar/avatar-1.png"
                    alt=""
                  />
                </div>
                {/* Reviewer Media */}
                <div className="reviewer-meta media-body align-self-center ml-4">
                  <h5 className="reviewer-name color-primary mb-2">
                    Junaid Hasan
                  </h5>
                  <h6 className="text-secondary fw-6"> Themeland</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 res-margin">
            {/* Single Review */}
            <div className="single-review card">
              {/* Card Top */}
              <div className="card-top p-4">
                <div className="review-icon">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star-half-alt text-warning"></i>
                </div>
                <h4 className="text-primary mt-4 mb-3">
                very immenceful resource library!
                </h4>
                {/* Review Text */}
                <div className="review-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis nam id facilis, provident doloremque placeat eveniet
                    molestias laboriosam. Optio, esse.
                  </p>
                </div>
                {/* Quotation Icon */}
                <div className="quot-icon">
                  <img
                    className="avatar-md"
                    src="assets/img/icon/quote.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Reviewer */}
              <div className="reviewer media bg-gray p-4">
                {/* Reviewer Thumb */}
                <div className="reviewer-thumb">
                  <img
                    className="avatar-lg radius-100"
                    src="assets/img/avatar/avatar-2.png"
                    alt=""
                  />
                </div>
                {/* Reviewer Media */}
                <div className="reviewer-meta media-body align-self-center ml-4">
                  <h5 className="reviewer-name color-primary mb-2">
                    Junaid Hasan
                  </h5>
                  <h6 className="text-secondary fw-6"> Themeland</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Review */}
            <div className="single-review card">
              {/* Card Top */}
              <div className="card-top p-4">
                <div className="review-icon">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                </div>
                <h4 className="text-primary mt-4 mb-3">Great support!!</h4>
                {/* Review Text */}
                <div className="review-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis nam id facilis, provident doloremque placeat eveniet
                    molestias laboriosam. Optio, esse.
                  </p>
                </div>
                {/* Quotation Icon */}
                <div className="quot-icon">
                  <img
                    className="avatar-md"
                    src="assets/img/icon/quote.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Reviewer */}
              <div className="reviewer media bg-gray p-4">
                {/* Reviewer Thumb */}
                <div className="reviewer-thumb">
                  <img
                    className="avatar-lg radius-100"
                    src="assets/img/avatar/avatar-3.png"
                    alt=""
                  />
                </div>
                {/* Reviewer Media */}
                <div className="reviewer-meta media-body align-self-center ml-4">
                  <h5 className="reviewer-name color-primary mb-2">
                    Junaid Hasan
                  </h5>
                  <h6 className="text-secondary fw-6">Themeland</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
