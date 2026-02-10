import { footerMenu, footerServeMenu, footerTitle, footerContLink, footerEmail, footerAdd, verifiedDesign } from "./footerData";
import ScrollToTopProgress from "./ScrollToTopProgress";

function Footer() {
  return (
    <footer className="footer_sec pt-120 pb-80 text-white">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-8">
            <div className="position-relative">
              <h2 className="sec-title text-start"><span className="d-block fw-light text-white">{footerTitle.text}</span> <span className="fw-light">{footerTitle.textLight}</span> {footerTitle.textSub}</h2>
            </div>
          </div>
          <div className="col-xl-4 text-xl-end mb-xl-0 mb-5">
            <div className="row justify-content-between">
              <div className="col-xl-12 col-md-auto mb-30 mb-md-0">
                <ul className="foot_social justify-content-xl-end">
                  <li><a href="https://www.facebook.com/arnoxweb" target="_blank" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a></li>
                  <li><a href="https://www.instagram.com/arnoxweb/" target="_blank" aria-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://www.dribbble.com/samirgm" target="_blank" aria-label="Dribble"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/arnoxweb/" target="_blank" aria-label="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
              <div className="col-xl-12 col-md-auto align-self-center">
                <a href={footerContLink.link} className="link_contact">{footerContLink.text} <img src={footerContLink.icon} alt="Black Arrow"/></a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 contact_information">
            <div className="mb-30">
              <small className="text-uppercase d-flex gap-3 align-items-center mb-3"><i><img src={footerEmail.icon} alt="Email"/></i> {footerEmail.title}</small>
              <h5><a className="text-white fw-normal" href={footerEmail.link}>{footerEmail.text}</a></h5>
            </div>
            <div className="mb-30">
              <small className="text-uppercase d-flex gap-3 align-items-center mb-3"><i><img src={footerAdd.icon} alt="Address"/></i> {footerAdd.title}</small>
              <h6 className="text-white fw-normal lh-base"><a href={footerAdd.link} target="_blank" className="text-white">{footerAdd.text.map((line, index) => (<span key={index}>
                {line}
                <br />
              </span>))}</a></h6>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-sm-5 col-4 col-md-3">
                <ul className="foot_links">
                  {footerMenu.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-5 col-4 col-md-7">
                <ul className="foot_links">
                  {footerServeMenu.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-2 col-4 col-md-2">
                <a href={verifiedDesign.link} target="_blank"> <img src={verifiedDesign.image} alt="We're on DesignRush" /></a>
              </div>
            </div>
            <div className="copyright">
              Copyright © {new Date().getFullYear()} <b className="text-white fw-medium">Arnoxweb</b>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopProgress />
    </footer>
  );
}

export default Footer;

