import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import showToast from '../../../../lib/showToast'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      if (!form.checkValidity()) {
        form.classList.add('was-validated')
        return
      }
    })

    setLoading(true)

    try {
      const response = await axios.post('/api/enquiry', formData)
      if (response.data) {
        showToast({
          type: 'success',
          message: response.data.message,
        })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div
        className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark"
        style={{ backgroundImage: 'url(/assets/images/banner/bnr1.jpg)' }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>Contact Us</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row m-t15">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Us
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section className="map-wrapper1 overflow-hidden  content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 m-b30">
              <div className="info-box style-1 ">
                <div className="info">
                  <h2 className="text-light wow fadeInUp" data-wow-delay="0.6s">
                    Get in touch
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.8s">
                    Fill up the form and our team will get
                    <br /> back to you within 24 hours.
                  </p>
                </div>
                <div className="widget widget_about">
                  <div className="widget widget_getintuch">
                    <ul>
                      <li className="wow fadeInUp" data-wow-delay="1.0s">
                        <div className="d-flex align-items-center">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.7211 16.831C13.8849 16.831 13.0511 16.5547 12.3536 16.0022L6.74735 11.4822C6.3436 11.1572 6.2811 10.566 6.60485 10.1635C6.9311 9.76224 7.5211 9.69849 7.9236 10.0222L13.5249 14.5372C14.2286 15.0947 15.2199 15.0947 15.9286 14.5322L21.4736 10.0247C21.8761 9.69599 22.4661 9.75849 22.7936 10.161C23.1199 10.5622 23.0586 11.1522 22.6574 11.4797L17.1024 15.9947C16.3999 16.5522 15.5599 16.831 14.7211 16.831Z"
                              fill="white"
                            />
                            <mask
                              id="mask0_52_48"
                              style={{ maskType: 'luminance' }}
                              maskUnits="userSpaceOnUse"
                              x={1}
                              y={2}
                              width={28}
                              height={25}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.25 2.5H28.1249V26.875H1.25V2.5Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_52_48)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.54863 25H20.8236C20.8261 24.9975 20.8361 25 20.8436 25C22.2699 25 23.5349 24.49 24.5049 23.5212C25.6311 22.4 26.2499 20.7887 26.2499 18.985V10.4C26.2499 6.90875 23.9674 4.375 20.8236 4.375H8.55113C5.40738 4.375 3.12488 6.90875 3.12488 10.4V18.985C3.12488 20.7887 3.74488 22.4 4.86988 23.5212C5.83988 24.49 7.10613 25 8.53113 25H8.54863ZM8.52738 26.875C6.59863 26.875 4.87613 26.175 3.54613 24.85C2.06488 23.3725 1.24988 21.29 1.24988 18.985V10.4C1.24988 5.89625 4.38863 2.5 8.55113 2.5H20.8236C24.9861 2.5 28.1249 5.89625 28.1249 10.4V18.985C28.1249 21.29 27.3099 23.3725 25.8286 24.85C24.4999 26.1737 22.7761 26.875 20.8436 26.875H20.8236H8.55113H8.52738Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                          <span className="text-light">Chat to us</span>
                        </div>
                        <p className="m-a0 p-t10">
                          Our friendly team is here to help.
                        </p>
                        <h6 className="text-light">ScholarVault@info.com</h6>
                      </li>
                      <li className="wow fadeInUp" data-wow-delay="1.2s">
                        <div className=" d-flex align-items-center">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.3131 10.625C14.1069 10.625 13.1256 11.6063 13.1256 12.8138C13.1256 14.02 14.1069 15 15.3131 15C16.5194 15 17.5006 14.02 17.5006 12.8138C17.5006 11.6063 16.5194 10.625 15.3131 10.625M15.3131 16.875C13.0731 16.875 11.2506 15.0537 11.2506 12.8137C11.2506 10.5725 13.0731 8.75 15.3131 8.75C17.5531 8.75 19.3756 10.5725 19.3756 12.8137C19.3756 15.0537 17.5531 16.875 15.3131 16.875"
                              fill="white"
                            />
                            <mask
                              id="mask0_52_82"
                              style={{ maskType: 'luminance' }}
                              maskUnits="userSpaceOnUse"
                              x={5}
                              y={2}
                              width={21}
                              height={25}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 2.5H25.6244V26.875H5V2.5Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_52_82)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.3119 4.375C10.6594 4.375 6.87439 8.19625 6.87439 12.8913C6.87439 18.865 13.9044 24.685 15.3119 24.995C16.7194 24.6838 23.7494 18.8638 23.7494 12.8913C23.7494 8.19625 19.9644 4.375 15.3119 4.375V4.375ZM15.3119 26.875C13.0694 26.875 4.99939 19.935 4.99939 12.8912C4.99939 7.16125 9.62564 2.5 15.3119 2.5C20.9981 2.5 25.6244 7.16125 25.6244 12.8912C25.6244 19.935 17.5544 26.875 15.3119 26.875V26.875Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                          <span className="text-light">Office</span>
                        </div>
                        <p className=" m-a0 p-t10">
                          Come say hello at our offce HQ.
                        </p>
                        <h6 className="text-light">ScholarVault@info.com</h6>
                      </li>
                      <li className="wow fadeInUp" data-wow-delay="1.4s">
                        <div className="d-flex align-items-center">
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_52_107"
                              style={{ maskType: 'luminance' }}
                              maskUnits="userSpaceOnUse"
                              x={17}
                              y={2}
                              width={12}
                              height={12}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.9425 2.50037H28.6163V13.1664H17.9425V2.50037Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_52_107)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M27.6784 13.1664C27.2071 13.1664 26.8021 12.8126 26.7484 12.3339C26.2746 8.11388 22.9971 4.83888 18.7759 4.37013C18.2621 4.31263 17.8909 3.85013 17.9484 3.33513C18.0046 2.82138 18.4634 2.44263 18.9834 2.50763C24.0809 3.07388 28.0396 7.02763 28.6109 12.1239C28.6684 12.6389 28.2984 13.1026 27.7846 13.1601C27.7496 13.1639 27.7134 13.1664 27.6784 13.1664"
                                fill="white"
                              />
                            </g>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M23.2533 13.1798C22.8133 13.1798 22.422 12.8698 22.3345 12.4223C21.9746 10.5723 20.5483 9.14607 18.7008 8.78732C18.1921 8.68857 17.8608 8.19732 17.9596 7.68857C18.0583 7.17982 18.5583 6.84732 19.0583 6.94732C21.6595 7.45232 23.6683 9.45982 24.1745 12.0623C24.2733 12.5723 23.942 13.0636 23.4345 13.1623C23.3733 13.1736 23.3133 13.1798 23.2533 13.1798"
                              fill="white"
                            />
                            <mask
                              id="mask1_52_107"
                              style={{ maskType: 'luminance' }}
                              maskUnits="userSpaceOnUse"
                              x={2}
                              y={2}
                              width={27}
                              height={27}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.50055 2.49988H28.1258V28.1255H2.50055V2.49988Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask1_52_107)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.4494 6.3268C5.4519 6.3268 5.3894 6.3918 5.31065 6.4693C5.00815 6.76305 4.3819 7.3743 4.37565 8.65305C4.36565 10.4418 5.5419 13.7631 11.2057 19.4256C16.8419 25.0606 20.1582 26.2506 21.9519 26.2506H21.9782C23.2569 26.2431 23.8669 25.6168 24.1607 25.3156C24.2494 25.2243 24.3219 25.1556 24.3732 25.1143C25.6194 23.8606 26.2569 22.9293 26.2507 22.3306C26.2432 21.7206 25.4844 21.0006 24.4357 20.0018C24.1019 19.6856 23.7394 19.3393 23.3569 18.9568C22.3644 17.9681 21.8757 18.1368 20.7944 18.5168C19.3007 19.0406 17.2544 19.7581 14.0657 16.5668C10.8757 13.3781 11.5907 11.3318 12.1119 9.8368C12.4894 8.7568 12.6619 8.26555 11.6707 7.27305C11.2832 6.88555 10.9344 6.51805 10.6132 6.18055C9.62065 5.13805 8.9044 4.3843 8.29815 4.37555H8.28815C7.6894 4.37555 6.7594 5.01555 5.44315 6.3318C5.4469 6.32805 5.44815 6.3268 5.4494 6.3268V6.3268ZM21.9519 28.1256C18.8369 28.1256 14.7757 25.6456 9.88065 20.7518C4.96565 15.8381 2.4819 11.7643 2.50065 8.64305C2.5119 6.58055 3.59315 5.5243 3.9994 5.12805C4.02065 5.1018 4.09315 5.03055 4.11815 5.00555C5.9119 3.2118 7.1444 2.4743 8.3219 2.50055C9.71815 2.5193 10.7132 3.56555 11.9719 4.8893C12.2832 5.21555 12.6194 5.5718 12.9957 5.9468C14.8194 7.7718 14.3007 9.26055 13.8819 10.4556C13.4269 11.7593 13.0332 12.8843 15.3907 15.2418C17.7482 17.5993 18.8719 17.2056 20.1744 16.7468C21.3707 16.3293 22.8557 15.8068 24.6832 17.6318C25.0544 18.0031 25.4044 18.3356 25.7294 18.6443C27.0582 19.9093 28.1082 20.9081 28.1257 22.3081C28.1394 23.5006 27.4144 24.7181 25.6244 26.5081L24.8319 25.9706L25.5032 26.6243C25.1069 27.0306 24.0532 28.1131 21.9894 28.1256H21.9519Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                          <span className="text-light">Office</span>
                        </div>
                        <p className=" m-a0 p-t20">Mon-Fri from 9am to 7pm.</p>
                        <h6 className="text-light">+1 123 456 7890</h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className=" dz-social style-1 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h6 className="text-light">Our Socials</h6>
                  <ul className="social-icon">
                    <li>
                      <a
                        className="social-btn"
                        target="_blank"
                        href="https://www.facebook.com"
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-btn"
                        target="_blank"
                        href="https://www.instagram.com"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-btn"
                        target="_blank"
                        href="https://twitter.com"
                      >
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-btn"
                        target="_blank"
                        href="https://www.youtube.com"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 m-b30">
              <div className="form-wrapper style-1">
                <h2 className="title m-a0 wow fadeInUp" data-wow-delay="1.6s">
                  Get In touch
                </h2>
                <p
                  className="font-text text-primary p-b10 wow fadeInUp"
                  data-wow-delay="1.7s"
                >
                  We are here for you. How we can help?
                </p>
                <div className="contact-area">
                  <form
                    className="needs-validation"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className="dzFormMsg" />
                    <input
                      type="hidden"
                      className="form-control"
                      name="dzToDo"
                      defaultValue="Contact"
                    />
                    <div className="row ">
                      <div className="col-md-6">
                        <div
                          className="input-group wow fadeInUp"
                          data-wow-delay="1.8s"
                        >
                          <input
                            name="name"
                            required
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please enter Name
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div
                          className="input-group wow fadeInUp"
                          data-wow-delay="2.0s"
                        >
                          <input
                            name="email"
                            required
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please enter Email.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="input-group wow fadeInUp"
                          data-wow-delay="2.1s"
                        >
                          <input
                            name="subject"
                            required
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please enter Subject.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div
                          className="input-group wow fadeInUp"
                          data-wow-delay="2.2s"
                        >
                          <textarea
                            name="message"
                            rows={5}
                            required
                            className="form-control"
                            placeholder="Type Message..."
                            value={formData.message}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please enter Message
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 p-t20">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="btn btn-primary wow fadeInUp"
                          data-wow-delay="2.4s"
                          disabled={loading}
                        >
                          {loading ? 'Sending...' : 'Submit Now'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="section-head text-center">
            <h2 className="title wow fadeInUp" data-wow-delay="0.8s">
              FAQ'S
            </h2>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How to upload Thesis?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>The User need to sign in first.</strong> Upon
                  successful login ,the will be redirect to his dashboard where
                  he can upload thesis
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How long does it takes review Thesis
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    It will be depend on the Scholar who reviews the thesis.
                  </strong>{' '}
                  Generally it wont take more than a week to get the review.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can we download the thesis?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Yes,Thesis can be downloaded.</strong> these will also
                  be added to stats for the thesis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
