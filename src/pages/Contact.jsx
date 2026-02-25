import React from "react";
import ContactBanner from "../components/contact/ContactBanner";
import ContactForm from "../components/contact/ContactForm.jsx";
import ContactAddInfo from "../components/contact/ContactAddInfo.jsx";
import {contactInfoCard} from "../data/contactInfoCard.js";

function Contact() {
  return (
    <>
      <ContactBanner
        subtitle="Let's collaborate"
        title="Get in Touch for Expert
Web Design & Development"
        description="Have questions or need to discuss your next web design or web development project? We’re here to help! Whether you're looking to build a visually stunning website or develop a powerful digital solution, our team is ready to turn your ideas into reality. Reach out today to explore how we can bring your vision to life with top-tier web design and development services. "
      />

      <section className="pb-120">
        <div className="container">
          <div className="contact_detail">
            <div className="row g-0 flex-row-reverse">
              <div className="col-lg-7 col-xl-8 align-self-center">
                <ContactForm />
              </div>
              <div className="col-lg-5 col-xl-4">
                <ContactAddInfo />
              </div>
            </div>
          </div>

          <div className="row">
            {contactInfoCard.map((card, index) => (
              <div className="col-md-6" key={index}>
                <div className={`info_card ${card.variant === "yellow" ? "yellow" : ""}`}>
                  <h6>{card.title}</h6>
                  <p>{card.description}</p>
                  <a href={card.link} className="link_contact blue">
                    {card.linkText}
                    <img src="/images/arrow_black24x_r.svg" alt="Black Arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;