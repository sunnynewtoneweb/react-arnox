import { contactAddInfo } from "../../data/contactAddInfo.js";

function ContactAddInfo() {
  return(
    <div className="cont_info">
      <div className="title_head">
        <h3 className="mb-3 fw-bold text-white">Contact information</h3>
        <p className="light">Reach out to us via phone or email—we're here to assist you!</p>
      </div>
      <div>
        {contactAddInfo.map((item) => (
          <div className="add_info" key={item.id}>
            <i>
              <img src={item.icon} alt={item.alt} />
            </i>
            <div>
              <strong>{item.title}</strong>
              <p>
                {item.link ? (
                  <a href={item.link}>{item.content}</a>
                ) : (
                  item.content
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ContactAddInfo;