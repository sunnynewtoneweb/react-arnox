function TechnologieCard({ icon, title}){
 return(
    <div className="col-xl-2 col-md-3 col-sm-3 col-6">
      <div className="technologies__item item_box">
        <figure className="technologies__item_icon darkicn">
          <img src={icon} loading="lazy" alt="Technologies 1"/>
        </figure>
        <h4 className="technologies__item_title">{title}</h4>
      </div>
    </div>
 );
}
export default TechnologieCard;