import React from "react";
import { Link as ScrollLink } from "react-scroll";

function AboutUs() {
  return (
    <section id="aboutUs">
      <div className="my-5">
        <div className="text-center mb-5">
          <h1 className="text-capitalize font-weight-bold">
            ABOUT<span className="text-primary">US</span>
          </h1>
        </div>

        <div className="row justify-content-center">
          {/* Question 1 */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light text-center">
              <div className="mb-3">
                <div
                  className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <svg
                    fill="currentColor"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(180 12 12)"
                          opacity="0"
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" />
                        <circle cx="12" cy="19" r="1" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <ScrollLink
                to="question1"
                smooth={true}
                duration={500}
                className="text-dark"
              >
                <h6
                  className="mb-3"
                  style={{ fontWeight: 600, fontSize: "1.1rem" }}
                >
                  What is Ministry of Ayush?
                </h6>
              </ScrollLink>
              <p className="text-secondary" style={{ lineHeight: 2 }}>
                The Ministry of Ayush, short for the Ministry of Ayurveda, Yoga
                and Naturopathy, Unani, Siddha, and Homoeopathy, is a
                governmental body in India dedicated to promoting and regulating
                traditional and alternative systems of medicine. Established in
                2014, it oversees the development and propagation of ancient
                Indian healing practices such as Ayurveda, Yoga, Naturopathy,
                Unani, Siddha, and Homeopathy.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light text-center">
              <div className="mb-3">
                <div
                  className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <svg
                    fill="currentColor"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(180 12 12)"
                          opacity="0"
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" />
                        <circle cx="12" cy="19" r="1" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <ScrollLink
                to="question2"
                smooth={true}
                duration={500}
                className="text-dark"
              >
                <h6
                  className="mb-3"
                  style={{ fontWeight: 600, fontSize: "1.1rem" }}
                >
                  What is Pg Dissertation?
                </h6>
              </ScrollLink>
              <p className="text-secondary" style={{ lineHeight: 2 }}>
                A postgraduate (PG) dissertation is a research project
                undertaken by students pursuing advanced degrees, such as
                master's or doctoral programs. It involves in-depth study,
                critical analysis, and original contributions to a specific
                academic field or topic. PG dissertations are a significant
                component of higher education, allowing students to showcase
                their research skills, subject expertise, and ability to
                contribute new insights to their chosen field.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light text-center">
              <div className="mb-3">
                <div
                  className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <svg
                    fill="currentColor"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(180 12 12)"
                          opacity="0"
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" />
                        <circle cx="12" cy="19" r="1" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <ScrollLink
                to="question3"
                smooth={true}
                duration={500}
                className="text-dark"
              >
                <h6
                  className="mb-3"
                  style={{ fontWeight: 600, fontSize: "1.1rem" }}
                >
                  Emphasis on indigenous healthcare models.
                </h6>
              </ScrollLink>
              <p className="text-secondary" style={{ lineHeight: 2 }}>
                India's Five-Year Plans, formulated by the Planning Commission and later NITI Aayog, consistently prioritized indigenous healthcare models. Several committees, such as the Bhore (1946), Mudaliar (1961), and Srivastava (1975) committees, stressed the importance of enhancing traditional Indian medicine. National policies like the National Health Policy (1983), National Education Policy in Health Sciences (1989), and National Health Policy (2002) also highlighted the role of Indian System of Medicine (ISM) and Homeopathy (H) in improving healthcare access, especially in rural areas with limited services.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light text-center">
              <div className="mb-3">
                <div
                  className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <svg
                    fill="currentColor"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(180 12 12)"
                          opacity="0"
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" />
                        <circle cx="12" cy="19" r="1" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <ScrollLink
                to="question4"
                smooth={true}
                duration={500}
                className="text-dark"
              >
                <h6
                  className="mb-3"
                  style={{ fontWeight: 600, fontSize: "1.1rem" }}
                >
                  4 Educational courses and ISM&H

                </h6>
              </ScrollLink>
              <p className="text-secondary" style={{ lineHeight: 2 }}>
              A diploma course in Ayurveda was launched in the third (1961–1966) five-year plan.[10] The Central Council of Indian Medicine was established in 1971.[11] followed by Central Council of Homeopathy in 1973.[12] The sixth (1980–1985) and seventh (1985–1990) five-year plans aimed at developing novel ISM&H drugs.[10] The eighth (1992–1997) five-year plan lent considerable emphasis on the mainstreaming of Ayush.[citation needed] The Department of Indian System of Medicine and Homeopathy was launched in March 1995, under the Ministry of Health and Family Welfare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
