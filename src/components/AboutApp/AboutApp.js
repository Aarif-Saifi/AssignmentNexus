import React from "react";
import {
  FaUser,
  FaMobile,
  FaAt,
  FaBoxOpen,
  FaGithub,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";

class AboutApp extends React.Component {
  render() {
    return (
      <div>
        <div className="bottom-right">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#myModal"
          >
            About
          </button>
        </div>

        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">About App</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <FaUser className="mr-3" />
                          About Me
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <FaUser className="mr-3" />
                            Aarif Saifi
                            <a
                              href="https://github.com/Aarif-Saifi"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="ml-3" />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/aarif-saifi-880b67155/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="ml-3" />
                            </a>
                          </li>
                          <li className="list-group-item">
                            <FaMobile className="mr-3" />
                            +91 9259293858
                          </li>
                          <li className="list-group-item">
                            <FaAt className="mr-3" />
                             aarifsaifi731@gmail.com
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>

                  </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutApp;
