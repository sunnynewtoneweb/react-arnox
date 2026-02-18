function FaqAccordian({ faqAccordianData }) {
  return (
    <div className="accordion accordion-flush accordion-faq" id="accordionFAQ">
      {faqAccordianData.map((item, index) => {
        const collapseId = `FAQcollapse${item.id}`;
        const isFirst = index === 0;

        return (
          <div className="accordion-item" key={item.id}>
            <div className="accordion-header">
              <button
                className={`accordion-button ${!isFirst ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={isFirst ? "true" : "false"}
                aria-controls={collapseId}
              >
                {item.question}
              </button>
            </div>

            <div
              id={collapseId}
              className={`accordion-collapse collapse ${
                isFirst ? "show" : ""
              }`}
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordian;