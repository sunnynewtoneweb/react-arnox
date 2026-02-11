import { aboutIntro, aboutPoints } from "./aboutData";

function AboutCard() {
  return (
    <div className="ps-xxl-5 ms-xl-4">

      <p className="mb-4 mb-xl-5">
        {aboutIntro.description}
      </p>

      {aboutPoints.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id}>
            
            <div className="d-flex gap-3 gap-md-4 align-items-center mb-3 mb-xl-4">
              <i><Icon /></i>
              <h6 className="fw-bold dark mb-0">{item.title}</h6>
            </div>

            <p className="mb-4 mb-xl-5">
              {item.description}
            </p>

          </div>
        );
      })}

    </div>
  );
}

export default AboutCard;
