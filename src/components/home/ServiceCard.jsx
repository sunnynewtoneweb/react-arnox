function ServiceCard({ link, icon: Icon, title, description }) {
  return (
    <div className="col-xxl-5 col-md-6">
      <div className="service__item">
        <a href={link}>
          <figure className="service__item_icon">
            <Icon/>
          </figure>
          <h5 className="service__item_title">{title}</h5>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;