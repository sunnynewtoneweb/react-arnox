import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { contactFormFields } from "../../data/contactFormFields.js";
import { sendContactForm } from "../../services/contactService.js";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'

const ContactForm = () => {
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({});
  // const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Manual validation
  if (!formData.name || !formData.email) {
    setError("Name and Email are required");
    return;
  }

  if (!phone) {
    setError("Valid phone number required");
    return;
  }

  if (!formData.comments) {
    setError("Message is required");
    return;
  }

  if (typeof executeRecaptcha !== "function") {
    setError("Recaptcha not ready. Please refresh.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const token = await executeRecaptcha("contact_submit");

    const data = new FormData();

    // append formData
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    data.append("phone", phone);

    data.append("g-recaptcha-response", token);

    const response = await sendContactForm(data);

    if (response.type === "success") {
      navigate("/thank-you");
    } else {
      setError(response.text || "Something went wrong");
    }

  } catch (err) {
    console.log(err);
    setError("Something went wrong. Please try again.");
  }

  setLoading(false);
};

  return (
    <form onSubmit={handleSubmit} className="row cont_form">

      {contactFormFields.map((field, index) => (
      <div
        key={field.name}
        className={index === 0 ? "col-md-12" : "col-md-6"}
      >
        <div className="form-group">
          <label>{field.label}</label>

          {field.name === "phone" ? (
            <PhoneInput
              international
              defaultCountry="IN"
              value={phone}
              className="form-control"
              onChange={(value) => {
                setPhone(value);
                setFormData({
                  ...formData,
                  phone: value,
                });
              }}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="form-control"
              onChange={handleChange}
            />
          )}
        </div>
      </div>
    ))}

      <div className="col-md-12">
        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="comments"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>

      {error && (
        <div className="col-md-12 mt-2">
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}

      <div className="col-md-12 mt-3">
        <button className="btns" disabled={loading}>
          <span>{loading ? "Sending..." : "Get in touch"}</span>
        </button>
      </div>

    </form>
  );
};

export default ContactForm;